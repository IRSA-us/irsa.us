import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const BanChoi = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Choi earned a Bachelor of Science degree in{" "}
        <StyledList
          items={["Physics", "California State University, Fullerton"]}
          conjunction2=" from "
        />
        . His degree allotted him the ability to perform duties in
        <StyledList
          items={[
            "Mechanics",
            "Thermodynamics",
            "Statistical Analysis",
            "Computer Aided Analysis",
            "Electrodynamics",
          ]}
        />
        . This technical degree has given him an understanding of the major
        scientific principles that are fundamental to{" "}
        <RouteLink
          href="/services/biomechanics"
          label="Biomechanics"
          endspc={false}
        />
        ,{" "}
        <RouteLink
          href="/services/human_factors"
          label="Human Factors"
          endspc={false}
        />
        ,
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
          endspc={false}
        />
        , and{" "}
        <RouteLink
          href="/services/animations_simulations"
          label="Computer Simulations"
          endspc={false}
        />
        . Additionally, Mr. Choi obtained his certifications in XL Tribometrist
        as well as{" "}
        <RouteLink
          href="/services/cdr"
          label="Crash Data Retrieval"
          endspc={false}
        />
        .{" "}
      </p>
      <p className="text-center text-xl">
        Mr. Choi applies his knowledge of and experience with the principles of
        Physics and Mathematics to analyze and reconstruct accidents. For{" "}
        <StyledList items={["traffic accidents"]} />, Mr. Choi can calculate
        angles of impact, crush depths, delta-V’s, G- forces, mechanism for
        injury, and speeds of impact. For{" "}
        <RouteLink href="/services/premises" label="premises liability" /> and
        industrial accidents, he uses his knowledge of the UBC/CBC/ADA codes,
        and ANSI/ASTM/OSHA standards to determine liability.{" "}
      </p>
      <p className="text-center text-xl">
        Mr. Choi operates his skill in creating computer simulations and CAD
        diagrams. He employs the discipline of Accident Reconstruction to{" "}
        <StyledList items={["analyze safety"]} /> in designs, practices, and
        procedures. His forensic investigations have included the following
        types of accidents: automobile vs. automobile; automobile vs.
        pedestrian; slip and fall; trip and fall; and premises liability.
      </p>
    </div>
  );
};

export default BanChoi;
