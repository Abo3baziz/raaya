"use client";
import Image from "next/image";
import myLogo from "@/public/logo.svg";
import Link from "next/link";
import { Button, BorderButton } from "./Buttons";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tNav = useTranslations("navbar");
  const tLogo = useTranslations("logo");
  const tButton = useTranslations("button");

  const locale = useLocale();

  return (
    <nav className="flex max-w-full flex-wrap justify-between text-2xl bg-[rgba(255,255,255,0.9)] sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto flex flex-wrap flex-row-reverse justify-between px-4 md:px-8 lg:px-16 xl:px-32 h-20 relative">
        <div className="flex items-center gap-x-2">
          <p className="font-bold text-primary">{tLogo("company")}</p>
          <Image src={myLogo} alt={tLogo("imageAlt")} />
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
            <Link href="">{tNav("main")}</Link>
          </li>
          <li>
            <Link href="#whoWeAre">{tNav("whoWeAre")}</Link>
          </li>
          <li>
            <Link href="#plans ">{tNav("plans")}</Link>
          </li>
          <li>
            <Link href="#FAQ">{tNav("faq")}</Link>
          </li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden lg:flex flex-row-reverse items-center gap-x-6">
          <BorderButton
            text={locale === "en" ? "العربية" : "English"}
            url={locale === "en" ? "/ar" : "/en"}
            className="text-primary border text-[14px] w-25 h-8 px-6 rounded-full leading-[200%]"
          />

          <Button
            url="placeholder"
            text={tButton("check-now")}
            className="bg-primary  text-[14px] w-fit h-8 px-6 rounded-full leading-[200%]"
          />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 top-20  bg-[#d6d6d6] w-full flex flex-col items-center px-8 py-10">
            <ul className="flex flex-col gap-y-4 font-semibold text-[1rem] items-end ">
              <li>
                <Link href="" onClick={() => setIsMenuOpen(false)}>
                  {tNav("main")}
                </Link>
              </li>
              <li>
                <Link href="#whoWeAre" onClick={() => setIsMenuOpen(false)}>
                  {tNav("whoWeAre")}
                </Link>
              </li>
              <li>
                <Link href="#plans " onClick={() => setIsMenuOpen(false)}>
                  {tNav("plans")}
                </Link>
              </li>
              <li>
                <Link href="#FAQ" onClick={() => setIsMenuOpen(false)}>
                  {tNav("faq")}
                </Link>
              </li>
            </ul>

            <div className="flex flex-row justify-end gap-x-3 mt-4">
              <Button
                text={tButton("check-now")}
                className="bg-primary text-[14px] h-10 px-6 rounded-full"
                url="/placeholder"
              />
              <BorderButton
                text={locale === "en" ? "العربية" : "English"}
                url={locale === "en" ? "/ar" : "/en"}
                className="text-primary border text-[14px] h-10 px-6 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
