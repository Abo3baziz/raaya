import Link from "next/link";

export function Button({
  text,
  className,
}: {
  text?: string;
  className: string;
}) {
  return (
    <Link
      className={`${className} rounded-full flex items-center justify-center text-[14px]`}
      href="/requested-page"
    >
      {text}
    </Link>
  );
}

export function BorderButton({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <Link
      href="/requested-page"
      className={`${className} border text-[14px] rounded-full flex items-center justify-center`}
    >
      {text}
    </Link>
  );
}
