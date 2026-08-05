"use client";

import { useEffect, useState } from "react";
import type { Locale, ProjectBrief } from "@/lib/types";
import { Turnstile } from "./turnstile";

const emptyBrief: ProjectBrief = { locale: "id", service: "", clientType: "", summary: "", problem: "", budget: "", timeline: "", name: "", company: "", email: "", whatsapp: "", website: "", consent: false };

export function ProjectBriefForm({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [step,setStep] = useState(0);
  const [data,setData] = useState<ProjectBrief>(() => {
    if(typeof window === "undefined") return {...emptyBrief,locale};
    let value: ProjectBrief = {...emptyBrief,locale};
    const saved = localStorage.getItem("hammad-brief");
    const estimate = sessionStorage.getItem("hammad-estimate");
    const fit = sessionStorage.getItem("hammad-fit");
    if(saved) try { value={...JSON.parse(saved),locale}; } catch {}
    if(estimate) try { value={...value,estimate:JSON.parse(estimate)}; } catch {}
    if(fit) try { value={...value,fit:JSON.parse(fit)}; } catch {}
    return value;
  });
  const [files,setFiles] = useState<File[]>([]);
  const [status,setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [turnstileToken,setTurnstileToken] = useState("");
  useEffect(()=>{localStorage.setItem("hammad-brief",JSON.stringify(data));},[data]);
  const set = (key:keyof ProjectBrief,value:unknown) => setData((current)=>({...current,[key]:value}));
  const available = [data.service,data.clientType,data.summary.trim().length>15,data.problem.trim().length>15,data.budget,data.timeline,true][step];
  const optionList = (items:string[],key:keyof ProjectBrief) => <div className="brief-options">{items.map(item=><button type="button" className={data[key]===item?"active":""} key={item} onClick={()=>set(key,item)}>{item}<span>○</span></button>)}</div>;

  async function submit() {
    setStatus("sending");
    try {
      const attachments:string[]=[];
      for(const file of files){
        const signed = await fetch("/api/upload-url",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:file.name,type:file.type,size:file.size})});
        if(!signed.ok) throw new Error();
        const {url,key}=await signed.json();
        const uploaded=await fetch(url,{method:"PUT",headers:{"content-type":file.type},body:file});
        if(!uploaded.ok) throw new Error();
        attachments.push(key);
      }
      const response=await fetch("/api/project-brief",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...data,attachments,turnstileToken,source:new URLSearchParams(location.search).get("source")??"direct"})});
      if(!response.ok) throw new Error();
      localStorage.removeItem("hammad-brief"); sessionStorage.removeItem("hammad-estimate"); sessionStorage.removeItem("hammad-fit"); setStatus("success");
    } catch { setStatus("error"); }
  }

  if(status==="success") return <div className="brief-success"><p className="kicker">BRIEF / RECEIVED</p><h2>{id?"Brief diterima.":"Brief received."}</h2><p>{id?"Terima kasih sudah memberi konteks. Kami akan review dan membalas dengan next step yang paling masuk akal.":"Thanks for sharing the context. We’ll review it and respond with the most sensible next step."}</p><a href={process.env.NEXT_PUBLIC_WHATSAPP_URL||"mailto:hello@hammad.studio"} className="silver-button">{id?"Lanjut di WhatsApp":"Continue on WhatsApp"}<span>↗</span></a></div>;

  const steps = [
    <div key="service"><h2>{id?"Apa yang Anda butuhkan?":"What do you need?"}</h2>{optionList(["Website","E-commerce","Business System","Digital Product / MVP","Automation",id?"Belum yakin":"Not sure yet"],"service")}</div>,
    <div key="type"><h2>{id?"Apa yang paling menggambarkan Anda?":"What best describes you?"}</h2>{optionList(["Business","Startup","Organization","Event","Personal brand","Other"],"clientType")}</div>,
    <div key="summary"><h2>{id?"Ceritakan tentang project-nya.":"Tell us about the project."}</h2><TextArea label={id?"Apa yang ingin dibuat atau diperbaiki?":"What are you trying to build or improve?"} value={data.summary} onChange={(value)=>set("summary",value)}/></div>,
    <div key="problem"><h2>{id?"Problem apa yang harus diselesaikan?":"What problem should this solve?"}</h2><TextArea label={id?"Konteks operasional atau bisnis sangat membantu.":"Business and operational context is extremely helpful."} value={data.problem} onChange={(value)=>set("problem",value)}/></div>,
    <div key="budget"><h2>{id?"Berapa perkiraan budget-nya?":"What is the estimated budget?"}</h2>{optionList(["Rp3–5M","Rp5–10M","Rp10–20M","Rp20–50M","Rp50M+",id?"Belum yakin":"Not sure yet"],"budget")}</div>,
    <div key="timeline"><h2>{id?"Kapan ingin launch?":"When would you like to launch?"}</h2>{optionList([id?"Secepat yang masuk akal":"As soon as reasonably possible",id?"Dalam 1 bulan":"Within 1 month","1–3 months","3+ months","Flexible"],"timeline")}</div>,
    <div key="contact"><h2>{id?"Bagaimana kami menghubungi Anda?":"How can we reach you?"}</h2><div className="contact-grid">
      <TextInput label="Name *" value={data.name} onChange={(v)=>set("name",v)}/><TextInput label="Company" value={data.company||""} onChange={(v)=>set("company",v)}/><TextInput label="Email *" type="email" value={data.email} onChange={(v)=>set("email",v)}/><TextInput label="WhatsApp *" value={data.whatsapp} onChange={(v)=>set("whatsapp",v)}/><TextInput className="full" label="Website" type="url" value={data.website||""} onChange={(v)=>set("website",v)}/>
      <label className="file-field full"><span>{id?"Reference (maks. 3 file, 10 MB/file)":"References (max. 3 files, 10 MB/file)"}</span><input type="file" accept="image/png,image/jpeg,application/pdf" multiple onChange={e=>setFiles(Array.from(e.target.files??[]).slice(0,3))}/></label>
      <label className="consent full"><input type="checkbox" checked={data.consent} onChange={e=>set("consent",e.target.checked)}/><span>{id?"Saya setuju data ini digunakan untuk menanggapi project brief saya.":"I agree that this information may be used to respond to my project brief."}</span></label>
      <Turnstile onToken={setTurnstileToken}/>
    </div></div>,
  ];
  const contactValid=data.name&&/^\S+@\S+\.\S+$/.test(data.email)&&data.whatsapp&&data.consent;
  return <div className="brief-form"><div className="brief-progress"><span>{String(step+1).padStart(2,"0")} / 07</span><div><i style={{width:`${((step+1)/7)*100}%`}}/></div><span>≈ 3 MIN</span></div><div className="brief-step">{steps[step]}</div><div className="brief-actions">{step>0?<button type="button" className="back-button" onClick={()=>setStep(step-1)}>← {id?"Kembali":"Back"}</button>:<span/>}{step<6?<button type="button" className="silver-button" disabled={!available} onClick={()=>setStep(step+1)}>{id?"Lanjut":"Continue"}<span>→</span></button>:<button type="button" className="silver-button" disabled={!contactValid||status==="sending"} onClick={submit}>{status==="sending"?(id?"Mengirim…":"Sending…"):(id?"Kirim Project Brief":"Submit Project Brief")}<span>↗</span></button>}</div>{status==="error"?<p className="form-error">{id?"Brief belum berhasil dikirim. Coba lagi atau email hello@hammad.studio.":"The brief could not be sent. Try again or email hello@hammad.studio."}</p>:null}</div>;
}

function TextArea({label,value,onChange}:{label:string,value:string,onChange:(value:string)=>void}){return <label className="text-field"><span>{label}</span><textarea value={value} onChange={e=>onChange(e.target.value)} rows={6}/></label>}
function TextInput({label,value,onChange,type="text",className=""}:{label:string,value:string,onChange:(value:string)=>void,type?:string,className?:string}){return <label className={`text-field ${className}`}><span>{label}</span><input type={type} value={value} onChange={e=>onChange(e.target.value)}/></label>}
