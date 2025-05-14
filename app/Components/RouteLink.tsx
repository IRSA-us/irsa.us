import Link from "next/link";

const RouteLink = ({
  label,
  href,
  startspc = true,
  endspc = true,
}: {
  label: string;
  href: string;
  startspc?: boolean;
  endspc?: boolean;
}) => {
  return (
    <>
      {startspc && " "}
      <Link href={href} target="_blank">
        <span className="font-bold text-[var(--gold)] underline hover:text-[var(--dark-gold)] transition-colors duration-300">
          {label}
        </span>
      </Link>
      {endspc && " "}
    </>
  );
};

export default RouteLink;
