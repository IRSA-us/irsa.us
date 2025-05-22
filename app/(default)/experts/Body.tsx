"use client";
import { useState } from "react";
import { Expert } from "./ExpertCard";
import ExpertCards from "./ExpertCards";
import ExpertSearchBar from "./ExpertSearchBar";

interface Props {
  experts: Expert[];
}

const Body = ({ experts }: Props) => {
  const [searchParams, setSearchParams] = useState("");

  return (
    <>
      <ExpertSearchBar setSearchParams={setSearchParams} />
      <ExpertCards experts={experts} searchParams={searchParams} />
    </>
  );
};

export default Body;
