"use client";

import { useState } from "react";
import { fitResult } from "@/lib/estimator";
import type { Locale } from "@/lib/types";
import { localHref } from "@/lib/locale";

const questions = [
  { key: "need", id: "Seberapa jelas problem bisnis yang ingin diselesaikan?", en: "How clear is the business problem?", choices: [[2,"Jelas dan terukur","Clear and measurable"],[1,"Ada, masih perlu dirapikan","Real, but needs definition"],[0,"Belum tahu","Not sure yet"]] },
  { key: "budget", id: "Apakah budget minimal sesuai kategori project?", en: "Does the budget match the project category?", choices: [[2,"Ya","Yes"],[1,"Masih fleksibel","Still flexible"],[0,"Jauh di bawah","Far below"]] },
  { key: "timeline", id: "Bagaimana timeline-nya?", en: "What is the timeline like?", choices: [[2,"Realistis dan fleksibel","Realistic and flexible"],[1,"Cukup ketat","Somewhat tight"],[0,"Harus selesai beberapa hari","Must launch in days"]] },
  { key: "authority", id: "Apakah Anda terlibat dalam keputusan project?", en: "Are you involved in the project decision?", choices: [[2,"Ya, decision maker","Yes, decision maker"],[1,"Bagian dari tim","Part of the team"],[0,"Hanya riset vendor","Only researching vendors"]] },
  { key: "collab", id: "Cara kerja yang dicari?", en: "What collaboration style do you want?", choices: [[2,"Scope jelas dan kolaboratif","Clear scope and collaboration"],[1,"Butuh arahan penuh","Need substantial guidance"],[0,"Unlimited revision / termurah","Unlimited revisions / cheapest"]] },
] as const;

export function ProjectFit({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const complete = Object.keys(answers).length === questions.length;
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const result = fitResult(score);
  const description = result === "Strong fit"
    ? (id ? "Kebutuhan dan cara kerja Anda terlihat selaras dengan studio ini." : "Your needs and working style appear well aligned with the studio.")
    : result === "Possible fit"
      ? (id ? "Ada potensi cocok. Brief singkat akan membantu kami menemukan pendekatan yang masuk akal." : "There may be a fit. A short brief will help us find a sensible approach.")
      : (id ? "Kami mungkin bukan partner yang paling tepat saat ini—dan itu tidak apa-apa." : "We may not be the right partner right now—and that is completely fine.");
  const saveFit = () => sessionStorage.setItem("hammad-fit", JSON.stringify({ score, result }));
  return <div className="fit-tool"><div className="fit-questions">{questions.map((question,index) => <fieldset key={question.key}><legend><span>0{index+1}</span>{id ? question.id : question.en}</legend><div>{question.choices.map(([value,idLabel,enLabel]) => <label key={idLabel} className={answers[question.key] === value ? "fit-option active" : "fit-option"}><input type="radio" name={question.key} value={value} onChange={() => setAnswers({...answers,[question.key]:value})}/>{id ? idLabel : enLabel}</label>)}</div></fieldset>)}</div><aside className="fit-result"><p className="kicker">{id ? "HASIL PROJECT FIT" : "PROJECT FIT RESULT"}</p>{complete ? <><strong>{result}</strong><p>{description}</p><a className="silver-button" href={localHref(locale,"/start-project?source=fit")} onClick={saveFit}>{id ? "Ceritakan project" : "Tell us about it"}<span>↗</span></a></> : <><strong>— / 10</strong><p>{id ? "Jawab lima pertanyaan untuk melihat apakah cara kerja kita cocok." : "Answer five questions to see whether our ways of working align."}</p></>}</aside></div>;
}
