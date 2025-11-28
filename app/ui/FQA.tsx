import Question from "./Question";
import { faqData } from "@/app/data/questions";

export default function FQA() {
  return (
    <section className="bg-main-bg pt-55 px-32 mb-40">
      <div className="flex flex-col items-center mb-24">
        <p className="font-semibold text-paragraph mb-5">الاسئله الشائعه</p>
        <h2 className="font-bold text-3xl text-heading mb-3">
          اهم الاسئله <span className="text-primary">المقترحه بكثره</span>
        </h2>
      </div>

      <div className="flex flex-col gap-y-8">
        {faqData.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
