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
      className={`${className} rounded-full flex items-center justify-center text-[14px]`}
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
      className={`${className} border text-[14px] rounded-full flex items-center justify-center`}
    >
      {text}
    </Link>
  );
}
