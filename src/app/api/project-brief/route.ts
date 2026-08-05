import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  locale:z.enum(["id","en"]), service:z.string().min(1).max(80), clientType:z.string().min(1).max(80),
  summary:z.string().min(16).max(5000), problem:z.string().min(16).max(5000), budget:z.string().min(1).max(80), timeline:z.string().min(1).max(100),
  name:z.string().min(2).max(120), company:z.string().max(160).optional().or(z.literal("")), email:z.string().email().max(200), whatsapp:z.string().min(6).max(40), website:z.string().url().optional().or(z.literal("")),
  attachments:z.array(z.string().max(500)).max(3).default([]), estimate:z.record(z.string(),z.unknown()).optional(), fit:z.object({score:z.number().min(0).max(10),result:z.string()}).optional(), consent:z.literal(true), turnstileToken:z.string().optional(), source:z.string().max(120).optional(),
});

async function verifyTurnstile(token:string|undefined,ip:string){const secret=process.env.TURNSTILE_SECRET_KEY;if(!secret)return process.env.NODE_ENV!=="production";if(!token)return false;const body=new URLSearchParams({secret,response:token,remoteip:ip});const response=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{method:"POST",body});const result=await response.json() as {success:boolean};return result.success}

function leadScore(data:z.infer<typeof schema>){let score=0;if(!data.budget.includes("3–5")&&!data.budget.toLowerCase().includes("not sure")&&!data.budget.toLowerCase().includes("belum"))score+=2;if(!data.timeline.toLowerCase().includes("1 month")&&!data.timeline.toLowerCase().includes("1 bulan"))score+=2;if(data.problem.length>80)score+=2;if(data.summary.length>80)score+=2;if(data.fit?.score&&data.fit.score>=8)score+=2;return score}

export async function POST(request:Request){
  try{
    const data=schema.parse(await request.json());
    const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()??"unknown";
    if(!await verifyTurnstile(data.turnstileToken,ip))return Response.json({error:"Verification failed"},{status:400});
    const id=crypto.randomUUID();const score=leadScore(data);
    if(process.env.DATABASE_URL){const sql=neon(process.env.DATABASE_URL);await sql`INSERT INTO project_briefs (id,locale,service,client_type,summary,problem,budget,timeline,name,company,email,whatsapp,website,attachments,estimate,fit,source,lead_score,status) VALUES (${id},${data.locale},${data.service},${data.clientType},${data.summary},${data.problem},${data.budget},${data.timeline},${data.name},${data.company||null},${data.email},${data.whatsapp},${data.website||null},${JSON.stringify(data.attachments)},${JSON.stringify(data.estimate??null)},${JSON.stringify(data.fit??null)},${data.source??"direct"},${score},'new')`}
    else if(process.env.NODE_ENV==="production")return Response.json({error:"Service unavailable"},{status:503});
    if(process.env.RESEND_API_KEY){const resend=new Resend(process.env.RESEND_API_KEY);const from=process.env.RESEND_FROM??"HAMMAD STUDIO <projects@hammad.studio>";await Promise.all([
      resend.emails.send({from,to:process.env.LEAD_NOTIFICATION_EMAIL??"hello@hammad.studio",replyTo:data.email,subject:`New ${data.service} brief — ${data.name}`,text:`Project: ${data.service}\nClient: ${data.name} / ${data.company||"—"}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\nScore: ${score}/10\n\n${data.summary}\n\nProblem:\n${data.problem}`}),
      resend.emails.send({from,to:data.email,subject:data.locale==="id"?"Project brief Anda sudah kami terima":"We received your project brief",text:data.locale==="id"?`Hi ${data.name},\n\nTerima kasih sudah memberi konteks. Kami akan review project Anda dan membalas dengan next step yang paling masuk akal.\n\nHAMMAD STUDIO®`:`Hi ${data.name},\n\nThanks for sharing the context. We’ll review your project and respond with the most sensible next step.\n\nHAMMAD STUDIO®`}),
    ])}
    return Response.json({id,ok:true},{status:201});
  }catch(error){if(error instanceof z.ZodError)return Response.json({error:"Invalid brief",fields:error.flatten().fieldErrors},{status:400});return Response.json({error:"Unable to process brief"},{status:500})}
}
