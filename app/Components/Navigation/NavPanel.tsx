"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useState } from "react";
import SubLinks from "./SubLinks";
import servicesData from "../../data/services.json";
import engineersData from "../../data/engineers.json";

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
  {
    label: "Experts",
    href: "/experts",
    subLinks: engineersData.engineers.map((engineer) => ({
      label: engineer.name,
      href: `/experts/${engineer.id}`,
    })),
  },
  { label: "Administrators", href: "/administrators" },
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
        <ul className="flex flex-col w-7/10 md:w-5/10 lg:w-7/10">
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
                  className={`${
                    page.href === "/" + currentPath.split("/")[1] &&
                    "text-slate-700"
                  }`}
                >
                  {page.label}
                </Link>
              </h1>
              <div className="h-[2px] w-full bg-white" />
            </li>
          ))}
        </ul>
        <div className="hidden relative md:flex w-3/10 flex-grow">
          {pages.map(
            (page) =>
              page.label === hoveredLink && (
                <div
                  key={"subLinksGroup_" + page.label}
                  className="absolute w-full h-full"
                >
                  <SubLinks links={page.subLinks} setPanelOut={setPanelOut} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
});

export default NavPanel;
