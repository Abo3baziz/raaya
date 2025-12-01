export interface Plan {
  plan_name: string;
  description: string;
  price: string;
  benefits: string[];
}

export const PLANS_DATA: Plan[] = [
  {
    plan_name: "single-plan.title",
    description: "single-plan.p",
    price: "single-plan.price",
    benefits: [
      "single-plan.benefits.1",
      "single-plan.benefits.2",
      "single-plan.benefits.3",
      "single-plan.benefits.4",
    ],
  },
  {
    plan_name: "limited-family-plan.title",
    description: "limited-family-plan.p",
    price: "limited-family-plan.price",
    benefits: [
      "limited-family-plan.benefits.1",
      "limited-family-plan.benefits.2",
      "limited-family-plan.benefits.3",
      "limited-family-plan.benefits.4",
      "limited-family-plan.benefits.5",
      "limited-family-plan.benefits.6",
    ],
  },
  {
    plan_name: "unlimited-family-plan.title",
    description: "unlimited-family-plan.p",
    price: "unlimited-family-plan.price",
    benefits: [
      "unlimited-family-plan.benefits.1",
      "unlimited-family-plan.benefits.2",
      "unlimited-family-plan.benefits.3",
      "unlimited-family-plan.benefits.4",
      "unlimited-family-plan.benefits.5",
      "unlimited-family-plan.benefits.6",
      "unlimited-family-plan.benefits.7",
    ],
  },
];
