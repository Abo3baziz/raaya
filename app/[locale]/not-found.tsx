import { AlertTriangle, Construction, Home } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("error");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gold-cream">
      <div className="max-w-2xl w-full text-center">
        {/* Construction Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Construction className="w-32 h-32 text-yellow-500 animate-pulse" />
            <AlertTriangle className="w-16 h-16 text-orange-500 absolute -top-2 -right-2" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-yellow-500 mb-4 tracking-tight">
          404
        </h1>

        {/* Under Construction */}
        <div className="mb-8" dir="rtl">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            {t("underConstruction")}
          </h2>
          <p className="text-xl text-slate-600 mb-2">{t("pageNotFound")}</p>
          <p className="text-slate-500 max-w-md mx-auto">{t("description")}</p>
        </div>

        {/* Caution Tape Design */}
        <div className="relative py-8 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-4 border-yellow-500 border-dashed"></div>
          </div>
        </div>

        {/* Back Home Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          dir="rtl"
        >
          <Home className="w-5 h-5" />
          {t("backToHome")}
        </a>

        {/* Additional Info */}
        <div className="mt-12 text-slate-400 text-sm" dir="rtl">
          <p>{t("errorCode")}</p>
        </div>
      </div>
    </div>
  );
}
