import Image from "next/image";
import doctor from "@/public/doctor-image.png";
import { BorderButton, Button } from "./Buttons";
import Avaters from "@/public/Avatars.png";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <div className="bg-gold-cream relative min-h-[calc(100vh-80px)]">
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-16 xl:px-32 flex-1 min-h-[calc(100vh-80px)] md:place-items-center"
          id=""
        >
          <div className="order-1 lg:order-0 mt-auto">
            <Image
              src={doctor}
              alt="Doctor image"
              fetchPriority="high"
              loading="eager"
              className="max-w-full h-auto md:mt-25"
            />
          </div>

          <div className="pt-8 md:pt-16 lg:pt-70 order-2 lg:order-0">
            <div>
              <p className="text-base md:text-[20px] text-primary mb-3 md:mb-5">
                {t("subTitle")}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 md:mb-8">
                {t("title")}
              </h1>

              <p className="text-paragraph text-base md:text-[18px] mb-4 md:mb-7">
                {t("p")}
              </p>
            </div>
            <div className="flex sm:flex-row gap-4 sm:gap-x-6 mb-4 justify-center">
              <Button
                url="placeholder"
                text={t("buttons.check-now")}
                className="bg-primary w-full sm:w-48 h-10 px-6"
              />
              <BorderButton
                url="placeholder"
                className="text-primary w-full sm:w-48 h-10 px-6"
                text={t("buttons.explore-doctors")}
              />
            </div>
            <div className="flex gap-3 md:gap-5 items-center">
              <Image src={Avaters} alt="" className="w-20 md:w-auto" />
              <p className="text-sm md:text-base">
                {t("members.start")}
                <span className="text-primary">{t("members.number")}</span>
                {t("members.end")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
