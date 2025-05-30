"use client";

import { useEffect, useState } from "react";

interface Props {
  clicked: boolean;
  items: string[];
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownItems = ({
  clicked,
  items,
  setDisplay,
  setInput,
  setClicked,
}: Props) => {
  const [showBorder, setShowBorder] = useState(clicked);

  useEffect(() => {
    if (clicked) {
      setShowBorder(true);
    } else {
      const timeout = setTimeout(() => setShowBorder(false), 690);
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  return (
    <div
      className={`absolute opacity-97 min-w-full z-100 bg-gray-900 rounded-b-2xl top-full ${
        clicked ? "max-h-200" : "max-h-[0px] pointer-events-none"
      } transition-[max-height] duration-700 ${
        showBorder ? "border-3" : "border-0"
      }`}
    >
      <ul
        className={`flex flex-col gap-1 px-5 py-5 ${
          clicked
            ? "opacity-97 transition-opacity duration-1500"
            : "opacity-0 transition-opacity duration-500"
        } `}
      >
        {items.map((i) => (
          <li key={i}>
            {i === "divider" ? (
              <div className="w-full h-[2px] bg-gray-500 my-3" />
            ) : (
              <button
                onClick={() => {
                  setDisplay(i);
                  setInput(i.split(" - ")[0]);
                  setClicked(false);
                }}
              >
                <p className="text-2xl font-bold hover:text-gray-800 transition-colors duration-250">
                  {i}
                </p>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownItems;
