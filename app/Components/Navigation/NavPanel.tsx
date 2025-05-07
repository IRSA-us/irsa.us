import Link from "next/link";
import { forwardRef } from "react";

const pages = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Experts", href: "/experts" },
    { label: "Administrators", href: "/admins" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
];

const NavPanel = forwardRef<HTMLDivElement, { show: boolean }>(
    ({ show }, ref) => {
        return (
            <div
                ref={ref}
                className={`absolute top-full left-0 z-[-1] w-full h-[700px]
                        tinted panel py-10 px-10
                        transition-all duration-300 transform ${
                            show
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-[700px] opacity-0"
                        }`}
            >
                <div className="h-full w-full">
                    <ul className="flex flex-col">
                        {pages.map((page) => (
                            <li key={page.label} className="w-full">
                                <Link href={page.href}>
                                    <h1 className="mb-5 md:mb-6 text-3xl md:text-5xl hover:text-slate-700 transition-colors duration-200">
                                        {page.label}
                                    </h1>
                                </Link>
                                <div className="mb-5 md:mb-6 h-[2px] w-full md:w-7/10 bg-white" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
);

export default NavPanel;
