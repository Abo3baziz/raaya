import Image from "next/image";
import myLogo from "@/public/logo.svg";
import Link from "next/link";
import { Button, BorderButton } from "./Buttons";

export default function Navbar() {
  return (
    <nav className="flex max-w-full h-20 bg-navbar flex-wrap justify-between text-2xl flex-row-reverse">
      <div className="flex items-center gap-x-2">
        <p className="font-bold text-primary">رعاية</p>
        <Image src={myLogo} alt="لوجو رعاية" />
      </div>

      <ul
        className="flex flex-row-reverse gap-x-10 font-semibold text-[1rem] items-center"
        id="links-container"
      >
        <li>
          <Link href="#الرئيسيه">الرئيسيه</Link>
        </li>
        <li>
          <Link href="#من نحن">من نحن</Link>
        </li>
        <li>
          <Link href="#خطط الاسعار">خطط الاسعار</Link>
        </li>
        <li>
          <Link href="#الأسئله الشائعه">الأسئله الشائعه</Link>
        </li>
      </ul>

      <div className="flex flex-row-reverse items-center gap-x-6">
        <BorderButton
          text="الانجليزيه"
          className="text-primary border text-[14px] w-25 h-8 px-6 rounded-full leading-[200%]"
        />

        <Button
          text="احجز الان"
          className="bg-primary text-white text-[14px] w-25 h-8 px-6 rounded-full leading-[200%]"
        />
      </div>
    </nav>
  );
}
