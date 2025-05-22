import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const JorgeGarcia = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Garcia earned his Bachelor of Science in{" "}
        <StyledList items={["Mechanical Engineering"]} /> from California State
        University, Northridge. The acquisition of such a degree required study
        of Static and Dynamic Systems, Thermodynamics, Material Science,
        Computer-Aided Analysis, Hydraulics, Mechatronics, alongside Internal
        Combustion Engines and Fundamentals of Energy Systems. Mr. Garcia’s
        previous experience includes creating work instruction for able harness
        assemblies at SCB Division of DCX-CHOL Enterprises in Bell Gardens, CA.
        In doing so, he was able to interpret specifications and analyze how,
        where, and why processes fail.
      </p>
      <p className="text-center text-xl">
        Mr. Garcia applies his experience with the principles of Physics and
        Mathematics in analyzing and reconstructing accidents. For{" "}
        <StyledList items={["transportation accidents"]} />, he uses the
        analysis and problem solving skills that he refined in this
        undergraduate years to investigate accidents and to determine
        information that is vital to the reconstruction of the accident, such as
        the angel of impact, crush depths, change in velocity, G-forces, speeds
        of the vehicles involved, and the accelerations as a result of a
        collision. For{" "}
        <RouteLink
          href="/services/premises"
          label="premises liability"
          endspc={false}
        />
        , he utilizes his knowledge of the UBC, ANSI, and OSHA standards to
        determine outcomes.
      </p>
      <p className="text-center text-xl">
        Mr. Garcia employs the discipline of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />{" "}
        to analyze safety in designs, practices, and procedures. His forensic
        investigation experience includes the following types of accidents:
        automobile v. automobile; automobile v. pedestrian; automobile v.
        motorcycle; slip and fall; trip and fall; and premises liability.{" "}
      </p>
    </div>
  );
};

export default JorgeGarcia;
