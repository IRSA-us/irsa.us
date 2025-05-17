"use client";
import "./NavStyles.css";
import NavPanel from "./NavPanel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [panelOut, setPanelOut] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on reroute
  useEffect(() => {
    setPanelOut(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setPanelOut(false);
      }
    };

    if (panelOut) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [panelOut]);

  return (
    <>
      <nav className="z-[1000] tinted h-full w-full flex items-center justify-between px-5 md:px-7">
        <div className="relative h-8/10 aspect-square">
          <Link href="/">
            <Image src={"/logo/darkLogo.png"} alt="IRSA" fill />
          </Link>
        </div>
        <h1 className="hidden md:inline text-center text-2xl">
          Institute of Risk and Safety Analyses
        </h1>
        <button
          onClick={() => setPanelOut(!panelOut)}
          className="flex justify-center items-center"
        >
          <div
            className={`transition-transform duration-300 ${
              panelOut ? "rotate-[-90deg]" : "rotate-0"
            }`}
          >
            {panelOut ? <IoCloseOutline size={50} /> : <HiBars3 size={50} />}
          </div>
        </button>
      </nav>
      <NavPanel show={panelOut} ref={panelRef} setPanelOut={setPanelOut} />
    </>
  );
};

export default NavBar;
