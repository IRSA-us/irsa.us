import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const JaimeGarcia = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Garcia earned his{" "}
        <StyledList
          items={["Bachelor of Science", "Mechanical Engineering"]}
          conjunction=" in "
        />{" "}
        from California State University, Los Angeles. The acquisition of such a
        degree required the study of physics, strength of materials, static and
        dynamic systems, kinematics, thermodynamics, and computer-aided
        analysis. Mr. Garcia applies his knowledge of mechanical engineering in
        the field of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
          endspc
        />{" "}
        to aid in the analysis of transportation accidents and premises
        liability issues.
      </p>

      <p className="text-center text-xl">
        Mr. Garcia also applies principles of{" "}
        <StyledList items={["physics", "mathematics"]} /> to analyze and
        reconstruct accidents. For transportation accidents, he uses analysis
        and problem-solving skills refined in his undergraduate years to
        investigate and determine information vital to accident reconstruction
        (such as the angle of impact, crush depths, change in velocity,
        G-forces, speed of the vehicles involved, and the acceleration and
        forces experienced as a result of a collision). For{" "}
        <RouteLink
          label="premises
        liability"
          href="/services/premises"
        />
        , Mr. Garcia uses his knowledge of Building Codes, Municipal Codes,
        ASTM, and ANSI standards to determine liability.
      </p>

      <p className="text-center text-xl">
        Mr. Garcia employs the discipline of accident reconstruction to analyze
        safety in walkway designs, industry practices, and procedures. His{" "}
        <StyledList items={["forensic investigations"]} /> have included the
        following types of accidents: automobile vs. automobile; slip and fall;
        trip and fall; falls on stairs, and premises liability.
      </p>
    </div>
  );
};

export default JaimeGarcia;
