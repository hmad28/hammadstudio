import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";

const upload=z.object({name:z.string().min(1).max(180),type:z.enum(["image/jpeg","image/png","application/pdf"]),size:z.number().positive().max(10*1024*1024)});
export async function POST(request:Request){try{const file=upload.parse(await request.json());const account=process.env.R2_ACCOUNT_ID,keyId=process.env.R2_ACCESS_KEY_ID,secret=process.env.R2_SECRET_ACCESS_KEY,bucket=process.env.R2_BUCKET;if(!account||!keyId||!secret||!bucket)return Response.json({error:"Uploads are not configured"},{status:503});const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,"-");const key=`briefs/${new Date().toISOString().slice(0,10)}/${crypto.randomUUID()}-${safe}`;const client=new S3Client({region:"auto",endpoint:`https://${account}.r2.cloudflarestorage.com`,credentials:{accessKeyId:keyId,secretAccessKey:secret}});const url=await getSignedUrl(client,new PutObjectCommand({Bucket:bucket,Key:key,ContentType:file.type,ContentLength:file.size}),{expiresIn:300});return Response.json({url,key})}catch{return Response.json({error:"Invalid file"},{status:400})}}
