import { PLANS_DATA } from "@/app/data/plans";
import { PlanCard } from "./PlanCard";

interface PlansProps {
  title?: string;
  subtitle?: string;
  highlightedWord?: string;
}

export default function Plans({
  title = "اختر الخطه",
  subtitle = "خطط الاسعار",
  highlightedWord = "المناسبه لك و لاسرتك",
}: PlansProps) {
  return (
    <section className="pt-55 px-32">
      <div className="flex flex-col items-center mb-24">
        <p className="font-semibold text-paragraph mb-5">{subtitle}</p>
        <h2 className="font-bold text-3xl text-heading mb-3">
          {title} <span className="text-primary">{highlightedWord}</span>
        </h2>
      </div>

      <div className="my-32 flex gap-x-7">
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
