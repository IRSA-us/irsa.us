import Picture from "@/app/Components/Picture";
import Tint from "@/app/Components/Tint";
import Link from "next/link";
import React from "react";

export interface Expert {
  id: string;
  name: string;
  titles: string[];
  degrees: string[];
  email: string;
  specialties?: string[];
  CV?: string;
  hidden?: boolean;
}

interface Props {
  expert: Expert;
  disabled: boolean;
  onClick: () => void;
}

const ExpertCard = ({ expert, disabled, onClick }: Props) => {
  const linkStyles =
    "overflow-hidden relative w-full md:w-47/100 lg:w-[30%] 2xl:w-[22%] flex flex-col items-center border-2 rounded-3xl shadow-[0_0_10px_white] pb-5";
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
      <ul className="pt-2 text-lg text-secondary font-bold text-center">
        {expert.titles &&
          expert.titles.map((title) => (
            <li key={title}>
              <h2>{title}</h2>
            </li>
          ))}
      </ul>
      {expert.specialties && (
        <h3 className="pt-2 text-center w-[95%]">
          {expert.specialties.map((s, i) => (
            <span key={s}>
              <span className="italic">{s}</span>
              {i !== expert.specialties!.length - 1 && <span>, </span>}
            </span>
          ))}
        </h3>
      )}
    </Link>
  );
};

export default ExpertCard;
