import PanelDivider from "@/app/Components/PanelDivider";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const WeiChao = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Chao joined the Institute of Risk and Safety Analyses in the late
        1990’s.  He employs the multiple disciplines of
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />
        , <RouteLink href="/services/human_factors" label="Human Factors" />,
        and Safety Analysis to identify root causes of accidents, assess
        injury-prevention alternatives, and recommend safety practices and
        procedures as they relate to post-accident evaluation.  Over more than
        two decades, he has participated in over 1,800 forensic investigations,
        covering auto accidents,{" "}
        <RouteLink href="/services/premises" label="premises liability" />,
        industrial and construction safety, machinery operation, product defect,
        OSHA violations, and code compliance.
      </p>

      <p className="text-center text-xl">
        Mr. Chao holds a{" "}
        <StyledList
          items={["Bachelor of Science", "Master of Science"]}
          conjunction=" and a "
        />{" "}
        in Mechanical Engineering. He is a member with the National Association
        of Professional Accident Reconstruction Specialists (NAPARS), Society of
        Automotive Engineers (SAE), and Southwestern Association of Technical
        Accident Investigators (SATAI).
      </p>

      <PanelDivider />

      <p className="text-left text-lg">
        <span className="font-bold">Keywords: </span>crush analysis, momentum
        balance, video analysis, CDR/EDR data analysis, airbag deployment, drag
        factor assessments, critical speed yaw, traffic signal phases and
        timing, pedestrian throw distance, line of sight, visual cues,
        Perception-Response Time (PRT), g-force, photogrammetry, OSHA, ANSI,
        ASTM, safeguarding, FARO scans, Faro Zone 3D, Virtual Crash, 3D Max,
        AutoCAD, re-enactment
      </p>

      <PanelDivider />
    </div>
  );
};

export default WeiChao;
