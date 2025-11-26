import icon_1 from "@/public/icon-1.svg";
import icon_2 from "@/public/icon-2.svg";
import icon_3 from "@/public/icon-3.svg";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-main-bg pt-32 px-32">
      <div className="flex flex-col items-center mb-24">
        <p className="font-semibold text-paragraph mb-5">من نحن</p>
        <h2 className="font-bold text-3xl text-heading mb-3">
          كيف يساعدك رعايه في حجز موعدك الطبي{" "}
          <span className="text-primary">بكل سهوله</span>
        </h2>
        <p className="text-paragraph w-[1170px] text-center">
          بدون مكالمات بدون طوابيرز اي تعقيدات كل اللي عليك تختار التخصص و تشوف
          تقيمات الاطباء و تختار الوقت اللي يناسبك. خلال دقائق بيكون عندك موعد
          مع طبيب. و المميز كمان انك تقدر تختار بين استشاره اونلاين او زياره
          للعياده
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-6">
        <div className="card">
          <Image src={icon_3} alt="" className="mb-2 shadow-xl" />

          <div className="flex flex-col items-center">
            <h3 className="h3-card-Heading">احجز مع طبيبك المفضل</h3>
            <p className="text-paragraph text-center">
              اختر بين عشرات الاطباء المعتمدين و ابدا حجزك الان
            </p>
          </div>
        </div>
        <div className="card">
          <Image src={icon_2} alt="" className="mb-2 shadow-xl" />

          <div className="flex flex-col items-center">
            <h3 className="h3-card-Heading">جدوله سهله و فوريه</h3>
            <p className="text-paragraph text-center">
              حدد الموعد المناسب لك و احصل علي تأكيد خلال دقائق
            </p>
          </div>
        </div>
        <div className="card">
          <Image src={icon_1} alt="" className="mb-2 shadow-xl" />

          <div className="flex flex-col items-center">
            <h3 className="h3-card-Heading">استشارات اونلاين او حضوري</h3>
            <p className="text-paragraph text-center">
              تواصل مع الطبيب عبر مكالمه او فيديو او زياره في العياده{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
