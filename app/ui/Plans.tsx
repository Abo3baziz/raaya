import { PLANS_DATA } from "@/app/data/plans";
import { PlanCard } from "./PlanCard";
import SectionHeader from "./SectionHeader";

export default function Plans() {
  return (
    <section className="pt-55 px-32">
      <SectionHeader
        title="اختر الخطه"
        subtitle="خطط الاسعار"
        highlightedWord="المناسبه لك و لاسرتك"
      />

      <div className="my-32 flex flex-row-reverse gap-x-7 justify-center">
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
    </section>
  );
}
