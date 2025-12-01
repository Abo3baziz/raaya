import icon_1 from "@/public/icon-1.svg";
import icon_2 from "@/public/icon-2.svg";
import icon_3 from "@/public/icon-3.svg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useTranslations } from "next-intl";

export default function WhoWeAre() {
  const t = useTranslations("whoWeAre");

  return (
    <section className="bg-main-bg pt-12 md:pt-16 lg:pt-55" id="whoWeAre">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title={t("title")}
          subtitle={t("subTitle.normal")}
          highlightedWord={t("subTitle.colored")}
        >
          <p className="text-paragraph max-w-[1170px] w-full px-4 text-center text-sm md:text-base">
            {t("p")}
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="card">
            <Image src={icon_3} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">{t("cards.card-3.heading")}</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                {t("cards.card-3.p")}
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={icon_2} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">{t("cards.card-2.heading")}</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                {t("cards.card-2.p")}
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={icon_1} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">{t("cards.card-1.heading")}</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                {t("cards.card-1.p")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
