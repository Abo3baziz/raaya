import icon_1 from "@/public/icon-1.svg";
import icon_2 from "@/public/icon-2.svg";
import icon_3 from "@/public/icon-3.svg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function WhoWeAre() {
  return (
    <section className="bg-main-bg pt-12 md:pt-16 lg:pt-55" id="whoWeAre">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title="من نحن"
          subtitle="كيف يساعدك رعايه في حجز موعدك الطبي"
          highlightedWord="بكل سهوله"
        >
          <p className="text-paragraph max-w-[1170px] w-full px-4 text-center text-sm md:text-base">
            بدون مكالمات بدون طوابيرز اي تعقيدات كل اللي عليك تختار التخصص و تشوف
            تقيمات الاطباء و تختار الوقت اللي يناسبك. خلال دقائق بيكون عندك موعد
            مع طبيب. و المميز كمان انك تقدر تختار بين استشاره اونلاين او زياره
            للعياده
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="card">
            <Image src={icon_3} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">احجز مع طبيبك المفضل</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                اختر بين عشرات الاطباء المعتمدين و ابدا حجزك الان
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={icon_2} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">جدوله سهله و فوريه</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                حدد الموعد المناسب لك و احصل علي تأكيد خلال دقائق
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={icon_1} alt="" className="mb-2 shadow-xl" />

            <div className="flex flex-col items-center">
              <h3 className="h3-card-Heading">استشارات اونلاين او حضوري</h3>
              <p className="text-paragraph text-center text-sm md:text-base">
                تواصل مع الطبيب عبر مكالمه او فيديو او زياره في العياده{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
