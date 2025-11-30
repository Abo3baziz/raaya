"use client";
import Image from "next/image";
import myLogo from "@/public/logo.svg";
import Link from "next/link";
import { Button, BorderButton } from "./Buttons";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex max-w-full flex-wrap justify-between text-2xl flex-row-reverse bg-[rgba(255,255,255,0.9)] sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto flex flex-wrap justify-between flex-row-reverse px-4 md:px-8 lg:px-16 xl:px-32 h-20">
        <div className="flex items-center gap-x-2">
          <p className="font-bold text-primary">رعاية</p>
          <Image src={myLogo} alt="لوجو رعاية" />
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop navigation */}
        <ul
          className="hidden lg:flex flex-row-reverse gap-x-10 font-semibold text-[1rem] items-center"
          id="links-container"
        >
          <li>
            <Link href="">الرئيسيه</Link>
          </li>
          <li>
            <Link href="#whoWeAre">من نحن</Link>
          </li>
          <li>
            <Link href="#plans ">خطط الاسعار</Link>
          </li>
          <li>
            <Link href="#FAQ">الأسئله الشائعه</Link>
          </li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden lg:flex flex-row-reverse items-center gap-x-6">
          <BorderButton
            text="الانجليزيه"
            className="text-primary border text-[14px] w-25 h-8 px-6 rounded-full leading-[200%]"
          />

          <Button
            text="احجز الان"
            className="bg-primary  text-[14px] w-25 h-8 px-6 rounded-full leading-[200%]"
          />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-full mt-4 pb-4">
            <ul className="flex flex-col gap-y-4 font-semibold text-[1rem] items-end">
              <li>
                <Link href="" onClick={() => setIsMenuOpen(false)}>
                  الرئيسيه
                </Link>
              </li>
              <li>
                <Link href="#whoWeAre" onClick={() => setIsMenuOpen(false)}>
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#plans " onClick={() => setIsMenuOpen(false)}>
                  خطط الاسعار
                </Link>
              </li>
              <li>
                <Link href="#FAQ" onClick={() => setIsMenuOpen(false)}>
                  الأسئله الشائعه
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-stretch gap-y-3 mt-4">
              <Button
                text="احجز الان"
                className="bg-primary text-[14px] h-10 px-6 rounded-full"
              />
              <BorderButton
                text="الانجليزيه"
                className="text-primary border text-[14px] h-10 px-6 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
