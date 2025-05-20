import Picture from "@/app/Components/Picture";
import Tint from "@/app/Components/Tint";
import Link from "next/link";
import React from "react";

interface Expert {
  id: string;
  name: string;
  titles?: string;
  hidden?: boolean;
}

const expertCard = ({ expert }: { expert: Expert }) => {
  const linkStyles =
    "hover:border-[var(--gold)] hover:scale-101 transition-all duration-200 ease-in-out";

  return (
    <Link
      className={`overflow-hidden relative w-full md:w-47/100 lg:w-3/10 flex flex-col items-center border-2 rounded-lg ${linkStyles}`}
      href={`/experts/${expert.id}`}
    >
      <Picture
        src={`/staff/engineer/${expert.id}/headshot.png`}
        alt={`${expert.name} Headshot`}
        override
        className="w-full h-auto rounded-none"
      />
      <Tint className="-z-10" alpha={0.5} />

      <h1 className="pt-5 text-3xl text-center">{expert.name}</h1>
      <h2 className="pt-1 pb-5 text-lg text-secondary font-bold text-center">
        {expert.titles}
      </h2>
    </Link>
  );
};

export default expertCard;
