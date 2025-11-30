import { PLANS_DATA } from "@/app/data/plans";
import { PlanCard } from "./PlanCard";
import SectionHeader from "./SectionHeader";

export default function Plans() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-55" id="plans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <SectionHeader
          title="اختر الخطه"
          subtitle="خطط الاسعار"
          highlightedWord="المناسبه لك و لاسرتك"
        />

        <div className="my-16 md:my-24 lg:my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 justify-items-center">
          {PLANS_DATA.map((plan, index) => (
            <PlanCard
              key={index}
              plan_name={plan.plan_name}
              description={plan.description}
              price={plan.price}
              benifits={plan.benifits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
