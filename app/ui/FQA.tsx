import Question from "./Question";
import { faqData } from "@/app/data/questions";
import SectionHeader from "./SectionHeader";

export default function FQA() {
  return (
    <section className="bg-main-bg pt-55 px-32 mb-40" id="FQA">
      <SectionHeader
        title="الاسئله الشائعه"
        subtitle="اكثر الاسئله"
        highlightedWord="المقترحه بكثره"
      />

      <div className="flex flex-col gap-y-8">
        {faqData.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
