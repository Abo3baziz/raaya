import Question from "./Question";
import { faqData } from "@/app/data/questions";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  return (
    <section className="bg-main-bg pt-12 md:pt-16 lg:pt-55 mb-20 md:mb-32 lg:mb-40" id="FAQ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title="الاسئله الشائعه"
          subtitle="اكثر الاسئله"
          highlightedWord="المقترحه بكثره"
        />

        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
          {faqData.map((item, index) => (
            <Question key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
