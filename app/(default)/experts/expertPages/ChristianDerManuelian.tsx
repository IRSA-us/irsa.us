import StyledList from "@/app/Components/StyledList";

const ChristianDerManuelian = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. DerManuelian earned his{" "}
        <StyledList
          items={["Bachelor of Science", "Data Science"]}
          conjunction=" in "
        />{" "}
        with significant coursework in{" "}
        <StyledList items={["Computer Science", "Machine Learning"]} /> from the
        University of California, San Diego.
      </p>

      <p className="text-center text-xl">
        He possesses a strong ability to program, build, diagnose, and analyze
        all types of computers, digital devices, and computer systems. He can
        extract and analyze{" "}
        <StyledList
          items={["metadata", "lost/deleted files", "forensic evidence"]}
        />{" "}
        from devices, systems, files, etc.
      </p>

      <p className="text-center text-xl">
        He is FAA Part 107 certified, enabling him to pilot{" "}
        <StyledList items={["unmanned aircraft systems"]} /> to survey sites,
        take photos/videos, and 3D scan/model.
      </p>
    </div>
  );
};

export default ChristianDerManuelian;
