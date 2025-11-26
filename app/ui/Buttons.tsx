import Link from "next/link";
import clsx from "clsx";

export function Button({
  text,
  className,
}: {
  text?: string;
  className: string;
}) {
  return (
    <Link className={className} href="/not-found">
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
    <Link href="/not-found" className={className}>
      {text}
    </Link>
  );
}
