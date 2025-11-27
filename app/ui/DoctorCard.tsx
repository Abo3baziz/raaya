import Image, { StaticImageData } from "next/image";
import type { ReactElement } from "react";

export default function DoctorCard({
  name,
  job,
  image,
  children,
}: {
  name: string;
  job: string;
  image: StaticImageData;
  children: ReactElement;
}) {
  return (
    <article className="px-4 py-3.5 rounded-3xl bg-white flex flex-col">
      <Image src={image} alt="صورة طبيب" className="rounded-2xl mb-2.5" />

      <div className="text-right">
        <h3 className="text-heading text-xl font-semibold">{name}</h3>
        <p className="text-paragraph mb-4">{job}</p>

        <div>{children}</div>
      </div>
    </article>
  );
}
