import DoctorCard from "./DoctorCard";
import doctor_1 from "@/public/doctor-1.png";
import doctor_2 from "@/public/doctor-2.png";
import doctor_3 from "@/public/doctor-3.png";
import doctor_4 from "@/public/doctor-4.png";
import gold_star from "@/public/gold-star.svg";
import gray_star from "@/public/gray-star.svg";
import Image from "next/image";

export default function Doctors() {
  return (
    <section className="pt-32 px-32">
      <div className="flex flex-col items-center mb-24">
        <p className="font-semibold text-paragraph mb-5">استكشف ابرز الاطباء</p>
        <h2 className="font-bold text-3xl text-heading mb-3">
          من مجموعه متنوعه من{" "}
          <span className="text-primary">الكوادر الطبيه</span>
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-x-6 justify-items-center">
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
    </section>
  );
}
