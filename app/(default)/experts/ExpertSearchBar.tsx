"use client";
import React, { useEffect, useRef, useState } from "react";
import { FcSearch } from "react-icons/fc";

interface Props {
  setSearchParams: React.Dispatch<React.SetStateAction<string>>;
}

const ExpertSearchBar = ({ setSearchParams }: Props) => {
  const [active, setActive] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchBarVisuals =
    "rounded-[8px] bg-[rgba(0,0,0,0.4)] outline-1 hover:shadow-[0_0_15px_var(--gold)]";

  return (
    <div className="w-full pt-10 px-10 xl:px-50">
      <div
        className={`${
          active
            ? "outline-[var(--gold)] shadow-[0_0_8px_var(--gold)]"
            : "outline-white shadow-[0_0_8px_white]"
        }  flex items-center gap-3 py-4 px-3 ${searchBarVisuals}`}
        onClick={() => setActive(true)}
        ref={searchBarRef}
      >
        <div className="w-[10%] md:w-[5%] lg:w-[3%] text-secondar">
          <FcSearch style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="flex-grow">
          {active ? (
            <input
              type="text"
              className="w-full bg-transparent outline-none text-4xl text-white placeholder-white"
              placeholder=""
              onChange={(e) => setSearchParams(e.target.value)}
              autoFocus
            />
          ) : (
            <>
              <p className="text-3xl opacity-50 hidden md:inline">
                Search e.g. EDR, Kenneth, Biomechanics
              </p>
              <p className="text-3xl opacity-50 md:hidden">Search</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertSearchBar;
