import engineerData from "../../data/engineers.json";
import Tint from "@/app/Components/Tint";
import Image from "next/image";
import ExpertCard from "./expertCard";

const page = async () => {
  const experts = engineerData.engineers;

  if (!experts)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 500: </span>
          Experts Data Cannot be Loaded Right Now.
        </h2>
      </div>
    );

  return (
    <>
      <div className="slideShowContainer relative top-0 left-0 w-full h-[85vh] flex items-center justify-center">
        <Image
          src="/staff/engineer/backdrop.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt={"Experts Backdrop"}
        />
        <Tint alpha={0.7} />
        <h1 className="text-7xl z-10">Experts</h1>
      </div>

      <div className="w-full p-10 xl:px-50">
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-10 md:gap-x-[6%] lg:gap-x-[5%] md:gap-y-10">
          {experts.map(
            (expert) =>
              !expert.hidden && <ExpertCard key={expert.id} expert={expert} />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
