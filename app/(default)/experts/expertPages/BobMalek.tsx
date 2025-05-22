import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const BobMalek = () => {
  return (
    <div className="flex flex-col gap-10 px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Malek’s experience involves working as a Forensic Scientist on a
        variety of{" "}
        <StyledList items={["criminal", "civil"]} conjunction2=" and " /> cases.
        Mr. Malek applies his knowledge of Physics, Dynamics, Kinematics,
        Construction Safety, Quality Assurance, Strength of Materials, Risk and
        Safety, and Material Science to the field of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />{" "}
        as it relates to transportation accidents, industrial accidents,
        <RouteLink
          href="/services/criminal"
          label="criminal investigations"
          endspc={false}
        />
        , and{" "}
        <RouteLink
          href="/services/premises"
          label="premises liability"
          endspc={false}
        />
        . Mr. Malek employs Accident Reconstruction to asses alternative designs
        and safety practices and procedures as they relate to post-accident
        evaluation. Mr. Malek is able to analyze how, where, and why systems
        fail; the type of failure; and how to best correct or improve upon the
        system.{" "}
      </p>

      <p className="text-center text-xl">
        Mr. Malek earned his{" "}
        <StyledList items={["Bachelor of Science in Civil Engineering"]} /> and
        later obtained his{" "}
        <StyledList items={["Master of Science in Engineering Management"]} />{" "}
        (with an emphasis on Safety Engineering) from the California State
        University, Northridge. His area of study included Physics, Dynamics,
        Strength of Materials, Risk and Safety, Quality Assurance, Manufacturing
        Standards, Construction Safety, Computer – Aided Design, and Material
        Science.{" "}
      </p>

      <p className="text-center text-xl">
        Mr. Malek applies his knowledge of Physics and Engineering to the field
        of Accident Reconstruction as it relates to transportation accidents,
        criminal investigations, and premises liability cases. For{" "}
        <StyledList items={["traffic accidents"]} />, he uses the
        problem-solving skills acquired during his undergraduate and graduate
        years to analyze accidents, and to determine information vital to the
        reconstruction of the accident, such as the angle of impact, crush
        depths, change in velocity, G-forces, speed of the vehicles involved,
        and the accelerations and forces experience as a result of a collision.{" "}
      </p>

      <p className="text-center text-xl">
        He has been involved in over{" "}
        <StyledList items={["700 forensics investigations"]} /> including
        automotive, bicycle, and pedestrian slip and falls and cases involving
        building and safety codes. Additionally, Mr. Malek is{" "}
        <StyledList items={["OSHA certified"]} /> and has extensive knowledge of
        construction safety and safety requirements.{" "}
      </p>
    </div>
  );
};

export default BobMalek;
