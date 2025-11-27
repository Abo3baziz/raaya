import { SaudiRiyal } from "lucide-react";
import { jetBrains_Mono } from "./fonts";
import badge from "@/public/badge-check.svg";
import Image from "next/image";
import { Button } from "./Buttons";

interface PlanCardProps {
  plan_name: string;
  description: string;
  price: number;
  benifits: string[];
}

export function PlanCard({
  plan_name,
  description,
  price,
  benifits,
}: PlanCardProps) {
  return (
    <article className="flex flex-col justify-between bg-white rounded-3xl pt-10 px-10 pb-8 w-96 h-150 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col items-end">
        <h2 className="font-semibold text-2xl mb-1.5">{plan_name}</h2>
        <p className="text-paragraph mb-6">{description}</p>
        <p
          className={`${jetBrains_Mono.variable} font-jetbrains flex gap-x-2 items-center`}
        >
          <span className="font-extrabold text-4xl">
            {price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <SaudiRiyal size={25} />
        </p>

        <span className="block min-w-full h-0.5 bg-black my-7"></span>

        <div>
          <ul className="flex flex-col items-end gap-y-2">
            {benifits.map((benefit, index) => (
              <li key={index} className="flex gap-x-1.5">
                <span className="text-heading text-right">{benefit}</span>
                <Image src={badge} alt="" width={25} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button text="احجز موعد" className="w-full py-2 bg-primary text-white" />
    </article>
  );
}
