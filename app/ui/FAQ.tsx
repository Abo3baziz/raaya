import Question from "./Question";
import { faqData } from "@/app/data/questions";
import SectionHeader from "./SectionHeader";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");

  return (
    <section
      className="bg-main-bg pt-12 md:pt-16 lg:pt-55 mb-20 md:mb-32 lg:mb-40"
      id="FAQ"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title={t("title")}
          subtitle={t("subTitle.normal")}
          highlightedWord={t("subTitle.colored")}
        />

        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
          {faqData.map((item, index) => (
            <Question
              key={index}
              question={t(item.question)}
              answer={t(item.answer)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
