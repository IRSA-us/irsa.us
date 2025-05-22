"use client";
import ExpertCard, { Expert } from "./ExpertCard";
import { useState } from "react";

interface Props {
  experts: Expert[];
  searchParams: string;
}

const expertCards = ({ experts, searchParams }: Props) => {
  const [clicked, setClicked] = useState(false);

  const query = searchParams.toLowerCase();
  const searchFiltered = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(query) ||
      expert.titles?.some((title) => title.toLowerCase().includes(query)) ||
      expert.degrees?.some((degree) =>
        degree
          .toLowerCase()
          .replaceAll(".", "")
          .includes(query.replaceAll(".", ""))
      ) ||
      expert.email.toLowerCase().includes(query) ||
      expert.specialties?.some((specialty) =>
        specialty.toLowerCase().includes(query)
      )
  );

  if (searchFiltered.length < 1)
    return (
      <p className="w-full h-[300px] flex items-center justify-center text-4xl">
        No Results Found
      </p>
    );

  return (
    <div className="w-full p-10 xl:px-50">
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10 md:gap-x-[6%] lg:gap-x-[5%] xl:gap-x-[4%] md:gap-y-10">
        {searchFiltered.map(
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
