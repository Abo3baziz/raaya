import Image from "next/image";
import logo from "@/public/logo-white.svg";
import { Button } from "./Buttons";
import { Phone, Map, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-heading py-6 md:py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-5">
          <div className="lg:mr-20 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-6 lg:mb-7 text-right lg:justify-self-end">
              تواصل معنا
            </h2>

            <ul className="flex flex-col gap-y-2 items-end">
              <li className="flex gap-3">
                <a href="tel:+201234567890" className="text-[#BFBFBF] text-sm md:text-base">
                  +20 123 456 7890
                </a>
                <Phone color="#BFBFBF" size={20} />
              </li>
              <li className="flex gap-3">
                <a href="mailto:example@mail.com" className="text-[#BFBFBF] text-sm md:text-base">
                  example@mail.com
                </a>
                <Mail color="#BFBFBF" size={20} />
              </li>
              <li className="flex gap-3">
                <address className="text-white text-sm md:text-base">
                  123 شارع النصر، القاهرة، مصر
                </address>

                <Map color="#BFBFBF" size={20} />
              </li>
            </ul>
          </div>
          <div className="justify-self-end order-1 lg:order-2 text-right lg:text-right">
            <div className="flex gap-x-3 md:gap-x-5 justify-end mb-3">
              <h2 className="font-bold text-2xl md:text-3xl text-white">رعاية</h2>
              <Image
                src={logo}
                alt="raaya logo"
                style={{ width: "25px", height: "auto" }}
                className="md:w-[30px]"
              />
            </div>

            <p className="text-white mb-6 md:mb-8 text-sm md:text-base">
              تتيح لك حجز موعد في مختلف التخصصات بدون مكالمات او انتظار
            </p>

            <Button
              text="احجز موعد"
              className="w-full sm:w-44 h-10 bg-primary font-semibold justify-self-end"
            />
          </div>
        </div>

        <div className="w-full h-0.5 bg-primary mb-5"></div>

        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-white font-semibold text-sm md:text-base text-center md:text-left order-2 md:order-1">
            {" "}
            &copy; 2025 شركة رعاية – جميع الحقوق محفوظة.
          </p>

          <ul className="flex gap-x-2.5 order-1 md:order-2">
            <li>
              <Link href="/raaya-facebook">
                <Facebook color="white" aria-label="صفحتنا علي فيسبوك" size={20} />
              </Link>
            </li>
            <li>
              <Link href="/raaya-instagram" aria-label="صفحتنا علي انستاجرام">
                <Instagram color="white" size={20} />
              </Link>
            </li>
            <li>
              <Link href="/raaya-linkedin" aria-label="صفحتنا علي لينكدان">
                <Linkedin color="white" size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
