import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import YouTubeEmbedMulti from "@/app/Components/YouTubeEmbedMulti";

const premises = () => {
  return (
    <div className="tintedPanel flex flex-col gap-30 items-center py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-start">
        <Picture
          src="/image/services/premises/cover.jpg"
          alt=""
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <div className="flex flex-col gap-7 items-center">
          <p className="text-xl font-bold text-center lg:px-5">
            IRSA Engineers use their expertise in{" "}
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
            <RouteLink href="/services/biomechanics" label="Biomechanics" />
            in assessing <span className="italic">premises liability</span>{" "}
            cases, such as:
          </p>
          <div className="w-full flex justify-center">
            <ul className="list-disc">
              {[
                "Trip/Slip & Fall",
                "Building Code Violations",
                "Balcony and/or Railing Failure",
                "Uneven Sidewalk/Curb/Walkway",
                "Lighting Conditions",
                "Furniture Defects",
              ].map((x) => (
                <li key={x} className="font-bold">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <p className="font-bold text-center lg:px-10">
            Site inspections are a vital aspect in forming our expert
            opinion(s). We employ our{" "}
            <StyledList
              items={[
                "scientific knowledge",
                "on-site presence",
                "calculations",
                "building code requirements",
              ]}
            />{" "}
            to help in determining if the cause of the accident was due to
            environmental circumstances (such as rain or snow), site conditions
            (such as standard inadequacies), or a latent defect.
            <br />
            <br />
            We perform assessments with various professional{" "}
            <StyledList items={["tools"]} /> such as
          </p>

          <div className="w-7/10 flex justify-center">
            <ul className="list-disc">
              {[
                {
                  name: "Slip Tester",
                  desc: "(to test wet and dry slip/friction conditions)",
                },
                {
                  name: "Light Meter",
                  desc: "(reads ambient light and direct source light)",
                },
                {
                  name: "Decibel Meter",
                  desc: "(measures sound levels)",
                },
                {
                  name: "Accelerometer",
                  desc: "(measures G-forces)",
                },
                {
                  name: "",
                  desc: "Related building codes for that year/location, standards (ASTM), and OSHA regulations",
                },
              ].map((tool, i) => (
                <li className="font-bold" key={"premises_tool_" + i}>
                  <StyledList items={[tool.name]} />{" "}
                  <span className="font-normal">{tool.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <PanelDivider />

      <div className="flex flex-col items-center gap-15">
        <h1 className="font-bold text-4xl text-[var(--gold)] text-center">
          PREMISES LIABILITY SIMULATIONS
        </h1>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "Ajr3WQcbd_4?si=6qr8YXQzhwFNwZxe",
              desc: "A patron of the casinos was playing three machines at once. While he was reaching for the machine on his right, his right foot stepped on a loose cover plate on the ground. As the patron put his weight on the ball of his foot, the plate slipped back, causing him to lose his balance and fall forward.",
            },
            {
              id: "HpjIw6kwwvY?si=FiRMc9QCqTE-Oyq9",
              desc: "A person in an elevator claims to have been injured while she was in between the closing elevator doors. Various scenarios are shown including the version plaintiff testified to and the most likely scenario that occurred.",
            },
            {
              id: "HR5l9Bw9Q0o?si=7vOa4CeEyzoxR7ep",
              desc: "An improperly installed venting system for a fireplace results in fire inside a home. This simulation goes over the details of the fireplace system and compares a proper installation versus the actual installation and how that installation caused the fire.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default premises;
