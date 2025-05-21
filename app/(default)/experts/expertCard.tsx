import Picture from "@/app/Components/Picture";
import Tint from "@/app/Components/Tint";
import Link from "next/link";
import React from "react";

export interface Expert {
  id: string;
  name: string;
  titles?: string[];
  hidden?: boolean;
}

interface Props {
  expert: Expert;
  disabled: boolean;
  onClick: () => void;
}

const ExpertCard = ({ expert, disabled, onClick }: Props) => {
  const linkStyles =
    "overflow-hidden relative w-full md:w-47/100 lg:w-3/10 flex flex-col items-center border-2 rounded-3xl shadow-[0_0_10px_white]";
  const linkAnimationStyles =
    "hover:border-[var(--gold)] hover:scale-101 transition-all duration-200 active:duration-500 ease-in-out active:scale-95 transition-transform";

  return (
    <Link
      className={`${linkStyles} ${linkAnimationStyles} ${
        disabled ? "pointer-events-none brightness-50" : ""
      }`}
      href={`/experts/${expert.id}`}
      onClick={onClick}
    >
      <Picture
        src={`/staff/engineer/${expert.id}/headshot.png`}
        alt={`${expert.name} Headshot`}
        override
        className="w-full h-auto rounded-none"
      />
      <Tint className="-z-10" alpha={0.5} />

      <h1 className="pt-5 text-3xl text-center">{expert.name}</h1>
      <ul className="pt-2 pb-5 text-lg text-secondary font-bold text-center">
        {expert.titles &&
          expert.titles.map((title) => <h2 key={title}>{title}</h2>)}
      </ul>
    </Link>
  );
};

export default ExpertCard;
