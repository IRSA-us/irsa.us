import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const JaimeGarcia = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Garcia earned his{" "}
        <StyledList
          items={["Bachelor of Science", "Mechanical Engineering"]}
          conjunction2=" in "
        />{" "}
        from California State University, Los Angeles. The acquisition of such a
        degree required the study of Physics, Strength of Materials, Static and
        Dynamic Systems, Kinematics, Thermodynamics, and Computer-Aided
        Analysis. Mr. Garcia applies his knowledge of Mechanical Engineering in
        the field of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />
        to aid in the analysis of transportation accidents and premises
        liability issues.
      </p>
      <p className="text-center text-xl">
        For <StyledList items={["transportation accidents"]} />, he uses
        analysis and problem-solving skills refined in his undergraduate years
        to investigate and determine information vital to Accident
        Reconstruction (such as the angle of impact, crush depths, change in
        velocity, G-forces, speed of the vehicles involved, and the acceleration
        and forces experienced as a result of a collision). For{" "}
        <RouteLink
          href="/services/premises"
          label="premises liability"
          endspc={false}
        />
        , Mr. Garcia uses his knowledge of the UBC, ANSI, and OSHA standards to
        determine liability.{" "}
      </p>
      <p className="text-center text-xl">
        Mr. Garcia employs the discipline of Accident Reconstruction to analyze
        safety in designs, practices, and procedures. His forensic
        investigations have included the following types of accidents:
        automobile vs. automobile; slip and fall; trip and fall; and premises
        liability.{" "}
      </p>
    </div>
  );
};

export default JaimeGarcia;
