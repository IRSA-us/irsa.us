import Link from "next/link";

const SubLinks = ({
  links,
}: {
  links: { label: string; href: string }[] | undefined;
}) => {
  if (links === undefined) return <div />;

  return (
    <div className="w-full h-full flex flex-col justify-between py-10 px-5 border-2 border-white">
      {links.map((link) => (
        <div className="flex flex-col" key={link.label}>
          <h2 key={link.label} className="font-bold text-2xl">
            <Link
              href={link.href}
              className="hover:text-slate-700 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </h2>

          <div className="w-full h-[0px] bg-white"></div>
        </div>
      ))}
    </div>
  );
};

export default SubLinks;
