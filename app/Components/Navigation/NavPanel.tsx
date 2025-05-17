"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useState } from "react";
import SubLinks from "./SubLinks";
import servicesData from "../../data/services.json";

const pages = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    subLinks: servicesData.services.map((service) => ({
      label: service.name,
      href: service.href,
    })),
  },
  { label: "Experts", href: "/experts" },
  { label: "Administrators", href: "/admins" },
  { label: "Media & Publications", href: "/media_and_publications" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const NavPanel = forwardRef<
  HTMLDivElement,
  { show: boolean; setPanelOut: React.Dispatch<React.SetStateAction<boolean>> }
>(({ show, setPanelOut }, ref) => {
  const currentPath = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleLinkClick = (href: string) => {
    if (href === currentPath) {
      setPanelOut(false);
    }
  };

  return (
    <div
      ref={ref}
      className={`absolute top-full left-0 z-[-1] w-full
                        tinted panel pb-10 px-10
                        transition-all duration-300 transform ${
                          show
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-[700px] opacity-0"
                        }`}
    >
      <div className="w-full flex">
        <ul className="flex flex-col w-7/10">
          {pages.map((page) => (
            <li
              key={page.label}
              className="w-full flex flex-col"
              onMouseEnter={() => setHoveredLink(page.label)}
            >
              <h1 className="py-7 text-3xl md:text-4xl hover:text-slate-700 transition-colors duration-200">
                <Link
                  href={page.href}
                  onClick={() => handleLinkClick(page.href)}
                >
                  {page.label}
                </Link>
              </h1>
              <div className="h-[2px] w-full bg-white" />
            </li>
          ))}
        </ul>
        <div className="relative flex w-3/10 flex-grow">
          {pages.map(
            (page) =>
              page.label === hoveredLink && (
                <div
                  key={"subLinksGroup_" + page.label}
                  className="absolute w-full h-full"
                >
                  <SubLinks links={page.subLinks} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
});

export default NavPanel;
