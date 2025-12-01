import DoctorCard from "./DoctorCard";
import doctor_1 from "@/public/doctor-1.png";
import doctor_2 from "@/public/doctor-2.png";
import doctor_3 from "@/public/doctor-3.png";
import doctor_4 from "@/public/doctor-4.png";
import gold_star from "@/public/gold-star.svg";
import gray_star from "@/public/gray-star.svg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useTranslations } from "next-intl";

export default function Doctors() {
  const t = useTranslations("doctors");

  return (
    <section className="pt-12 md:pt-16 lg:pt-55">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title={t("title")}
          subtitle={t("subTitle.normal")}
          highlightedWord={t("subTitle.colored")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          <DoctorCard
            image={doctor_4}
            name={t("doctor-names.doctor-4.name")}
            job={t("doctor-names.doctor-4.job")}
          >
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <p className="mr-1.5 text-[14px]">
                {t("doctor-names.doctor-4.rate")}
              </p>
            </div>
          </DoctorCard>
          <DoctorCard
            image={doctor_3}
            name={t("doctor-names.doctor-3.name")}
            job={t("doctor-names.doctor-3.job")}
          >
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gray_star} alt="gray star" />
              <p className="mr-1.5 text-[14px]">
                {t("doctor-names.doctor-3.rate")}
              </p>
            </div>
          </DoctorCard>
          <DoctorCard
            image={doctor_2}
            name={t("doctor-names.doctor-2.name")}
            job={t("doctor-names.doctor-2.job")}
          >
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gray_star} alt="gray star" />
              <Image src={gray_star} alt="gray star" />
              <p className="mr-1.5 text-[14px]">
                {t("doctor-names.doctor-3.rate")}
              </p>
            </div>
          </DoctorCard>
          <DoctorCard
            image={doctor_1}
            name={t("doctor-names.doctor-1.name")}
            job={t("doctor-names.doctor-1.job")}
          >
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <p className="mr-1.5 text-[14px]">
                {t("doctor-names.doctor-1.rate")}
              </p>
            </div>
          </DoctorCard>
        </div>
      </div>
    </section>
  );
}
