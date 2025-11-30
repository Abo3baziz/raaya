import DoctorCard from "./DoctorCard";
import doctor_1 from "@/public/doctor-1.png";
import doctor_2 from "@/public/doctor-2.png";
import doctor_3 from "@/public/doctor-3.png";
import doctor_4 from "@/public/doctor-4.png";
import gold_star from "@/public/gold-star.svg";
import gray_star from "@/public/gray-star.svg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Doctors() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-55">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title="استكشف ابرز الاطباء"
          subtitle="من مجموعه متنوعه من"
          highlightedWord="الكوادر الطبيه"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          <DoctorCard image={doctor_4} name="د. طارق علام" job="استشاري باطنه">
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <p className="mr-1.5 text-[14px]">(112 تقييم)</p>{" "}
            </div>
          </DoctorCard>
          <DoctorCard image={doctor_3} name="د. محمود عثمان" job="استشاري جراحه">
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gray_star} alt="gray star" />
              <p className="mr-1.5 text-[14px]">(73 تقييم)</p>{" "}
            </div>
          </DoctorCard>
          <DoctorCard
            image={doctor_2}
            name="د. مروي سليمان"
            job="استشاري انف و اذن"
          >
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gray_star} alt="gray star" />
              <Image src={gray_star} alt="gray star" />
              <p className="mr-1.5 text-[14px]">(37 تقييم)</p>{" "}
            </div>
          </DoctorCard>
          <DoctorCard image={doctor_1} name="د. محمد قباني" job="استشاري باطنه">
            <div className="flex justify-start flex-row-reverse items-center">
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <Image src={gold_star} alt="gold star" />
              <p className="mr-1.5 text-[14px]">(92 تقييم)</p>
            </div>
          </DoctorCard>
        </div>
      </div>
    </section>
  );
}
