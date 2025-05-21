"use client";
import ExpertCard, { Expert } from "./ExpertCard";
import { useState } from "react";

const expertCards = ({ experts }: { experts: Expert[] }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full p-10 xl:px-50">
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10 md:gap-x-[6%] lg:gap-x-[5%] md:gap-y-10">
        {experts.map(
          (expert) =>
            !expert.hidden && (
              <ExpertCard
                key={expert.id}
                expert={expert}
                disabled={clicked}
                onClick={() => setClicked(true)}
              />
            )
        )}
      </div>
    </div>
  );
};

export default expertCards;
