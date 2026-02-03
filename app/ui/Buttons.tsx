import Link from "next/link";

export function Button({
  text,
  className,
  url,
}: {
  text?: string;
  className: string;
  url: string;
}) {
  return (
    <Link
      className={`${className} rounded-full font-bold flex items-center justify-center text-[16px]`}
      href={url}
    >
      {text}
    </Link>
  );
}

export function BorderButton({
  text,
  className,
  url,
}: {
  text: string;
  className: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      className={`${className} border text-[16px] font-bold rounded-full flex items-center justify-center`}
    >
      {text}
    </Link>
  );
}
