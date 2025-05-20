import Link from "next/link";
import { usePathname } from "next/navigation";

const SubLinks = ({
  links,
  setPanelOut,
}: {
  links: { label: string; href: string }[] | undefined;
  setPanelOut: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const currentPath = usePathname();

  const handleLinkClick = (href: string) => {
    if (href === currentPath) {
      setPanelOut(false);
    }
  };

  if (links === undefined) return <div />;

  return (
    <div className="w-full h-full flex flex-col justify-between py-5 pl-10 border-2 border-white">
      {links.map((link) => (
        <div className="flex flex-col" key={link.label}>
          <h2 key={link.label} className="font-bold text-2xl">
            <Link
              href={link.href}
              className="hover:text-slate-700 transition-colors duration-200"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SubLinks;
