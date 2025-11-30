import Image from "next/image";
import doctor from "@/public/doctor-image.png";
import { BorderButton, Button } from "./Buttons";
import Avaters from "@/public/Avatars.png";

export default function Hero() {
  return (
    <>
      <div className="bg-gold-cream relative min-h-[calc(100vh-80px)]">
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-16 xl:px-32 flex-1"
          id=""
        >
          <div className="justify-self-center self-end order-1 lg:order-none">
            <Image
              src={doctor}
              alt="Doctor image"
              fetchPriority="high"
              loading="eager"
              className="max-w-full h-auto"
            />
          </div>

          <div className="text-right pt-8 md:pt-16 lg:pt-70 order-2 lg:order-none">
            <div>
              <p className="text-base md:text-[20px] text-primary mb-3 md:mb-5">
                مرحبا بك في منصة رعاية
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 md:mb-8">
                ابدا رحلتك الصحيه بسهوله
              </h1>

              <p className="text-paragraph text-base md:text-[18px] mb-4 md:mb-7">
                تتيح لك حجز موعد في مخلتف التخصصات بدون مكالمات او انتظار
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 justify-end mb-4">
              <Button text="احجز موعد" className="bg-primary w-full sm:w-48 h-10 px-6" />
              <BorderButton
                className="text-primary w-full sm:w-48 h-10 px-6"
                text="تصفح الاطباء"
              />
            </div>
            <div className="flex flex-row-reverse gap-3 md:gap-5 items-center">
              <Image src={Avaters} alt="" className="w-20 md:w-auto" />
              <p className="text-sm md:text-base">
                اكثر من <span className="text-primary">10,000+</span> مريض يستخدم
                منصة رعاية شهريا
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
