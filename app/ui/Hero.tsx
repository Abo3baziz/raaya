import Image from "next/image";
import doctor from "@/public/doctor-image.png";
import { BorderButton, Button } from "./Buttons";
import Avaters from "@/public/Avatars.png";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 px-32 flex-1 bg-gold-cream relative min-h-[calc(100vh-80px)]">
        <div className="justify-self-center self-end">
          <Image src={doctor} alt="Doctor image" fetchPriority="high" />
        </div>

        <div className="text-right pt-70">
          <div>
            <p className="text-[20px] text-primary mb-5">
              مرحبا بك في منصة رعاية
            </p>
            <h1 className="text-5xl font-bold text-heading mb-8">
              ابدا رحلتك الصحيه بسهوله
            </h1>

            <p className="text-paragraph text-[18px] mb-7">
              تتيح لك حجز موعد في مخلتف التخصصات بدون مكالمات او انتظار
            </p>
          </div>

          <div className="flex gap-x-6 justify-end mb-4">
            <Button
              text="احجز موعد"
              className="bg-primary  text-[14px] w-48 h-10 px-6 rounded-full flex items-center justify-center"
            />
            <BorderButton
              className="text-primary border text-[14px] w-48 h-10 px-6 rounded-full flex items-center justify-center"
              text="تصفح الاطباء"
            />
          </div>
          <div className="flex flex-row-reverse gap-5 items-center">
            <Image src={Avaters} alt="" />
            <p>
              اكثر من <span className="text-primary">10,000+</span> مريض يستخدم
              منصة رعاية شهريا
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
