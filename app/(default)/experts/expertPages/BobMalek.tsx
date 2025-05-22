import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const BobMalek = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Bob Malek serves as the{" "}
        <StyledList items={["Deputy Managing Scientist"]} /> at the Institute of
        Risk and Safety Analyses (IRSA), where he leads the forensic
        investigation and analysis of high-profile civil and criminal matters.
        With <StyledList items={["over 13 years"]} /> of specialized experience
        in
        <RouteLink
          href="/services/accident_recon"
          label="accident reconstruction"
          endspc={false}
        />
        ,{" "}
        <RouteLink
          href="/services/biomechanics"
          label="biomechanics"
          endspc={false}
        />
        ,{" "}
        <RouteLink
          href="/services/human_factors"
          label="human factors"
          endspc={false}
        />
        , and safety engineering, Mr. Malek has been qualified as an expert and
        testified in more than 90 trials across jurisdictions.
      </p>

      <p className="text-center text-xl">
        Mr. Malek holds a <StyledList items={["Juris Doctor"]} /> from the Santa
        Barbara College of Law and is a{" "}
        <StyledList items={["member of the California Bar"]} />.
        <br />
        <br />
        He also earned a{" "}
        <StyledList
          items={["Master of Science", "Engineering Management"]}
          conjunction2=" in "
        />{" "}
        and a{" "}
        <StyledList
          items={["Bachelor of Science", "Civil Engineering"]}
          conjunction2=" in "
        />{" "}
        from California State University, Northridge. This rare combination of
        legal acumen and technical expertise enables him to deliver
        comprehensive forensic evaluations that integrate scientific rigor with
        legal insight.
      </p>

      <p className="text-center text-xl">
        Mr. Malek’s forensic work spans transportation accidents, industrial
        incidents, criminal investigations, and premises liability. He applies
        principles of physics, dynamics, material science, and risk analysis to{" "}
        <StyledList items={["reconstruct accidents", "assess failures"]} /> in
        complex systems. His analysis routinely involves quantifying impact
        forces, vehicle dynamics, occupant kinematics, and structural
        deformation. In premises liability evaluations, he draws upon his
        extensive knowledge of building codes and safety regulations—including
        CBC, IBC, UBC, ANSI, and OSHA standards—to determine compliance and
        hazard foreseeability.
      </p>

      <p className="text-center text-xl">
        Mr. Malek employs a systems-based methodology to determine how and why
        failures occur, the nature of those failures, and how they could have
        been prevented or mitigated through alternative design or practice. He
        is also a <StyledList items={["principal instructor"]} /> at IRSA, where
        he teaches courses in accident reconstruction, human factors, and injury
        biomechanics.
      </p>
    </div>
  );
};

export default BobMalek;
