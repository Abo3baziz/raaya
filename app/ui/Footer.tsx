import Image from "next/image";
import logo from "@/public/logo-white.svg";
import { Button } from "./Buttons";
import { Phone, Map, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-32 bg-heading py-10">
      <div className="grid grid-cols-2 mb-5">
        <div className="mr-20">
          <h2 className="text-4xl font-semibold text-white mb-7 justify-self-end">
            تواصل معنا
          </h2>

          <ul className="flex flex-col gap-y-2 items-end">
            <li className="flex gap-3">
              <a href="tel:+201234567890" className="text-[#BFBFBF]">
                +20 123 456 7890
              </a>
              <Phone color="#BFBFBF" />
            </li>
            <li className="flex gap-3">
              <a href="mailto:example@mail.com" className="text-[#BFBFBF]">
                example@mail.com
              </a>
              <Mail color="#BFBFBF" />
            </li>
            <li className="flex gap-3">
              <address className="text-white">
                123 شارع النصر، القاهرة، مصر
              </address>

              <Map color="#BFBFBF" />
            </li>
          </ul>
        </div>
        <div className="justify-self-end">
          <div className="flex gap-x-5 justify-self-end mb-3">
            <h2 className="font-bold text-3xl text-white">رعاية</h2>
            <Image
              src={logo}
              alt="raaya logo"
              style={{ width: "30px", height: "auto" }}
            />
          </div>

          <p className="text-white mb-8">
            تتيح لك حجز موعد في مختلف التخصصات بدون مكالمات او انتظار
          </p>

          <Button
            text="احجز موعد"
            className="w-44 h-10 bg-primary font-semibold justify-self-end"
          />
        </div>
      </div>

      <div className="w-full h-0.5 bg-primary mb-5"></div>

      <div className="flex justify-between">
        <p className="text-white font-semibold">
          {" "}
          &copy; 2025 شركة رعاية – جميع الحقوق محفوظة.
        </p>

        <ul className="flex gap-x-2.5">
          <li>
            <Link href="">
              <Facebook color="white" aria-label="صفحتنا علي فيسبوك" />
            </Link>
          </li>
          <li>
            <Link href="" aria-label="صفحتنا علي انستاجرام">
              <Instagram color="white" />
            </Link>
          </li>
          <li>
            <Link href="" aria-label="صفحتنا علي لينكدان">
              <Linkedin color="white" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
