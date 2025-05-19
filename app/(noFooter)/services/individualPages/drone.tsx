import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";

const drone = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <h1 className="text-4xl text-center">
        Our <RouteLink href="https://www.faa.gov/" label="FAA" endspc={false} />
        -licensed engineers will pilot drones for your use case
      </h1>
      <PanelDivider />
      <ul className="font-bold text-3xl text-secondary text-center space-y-3">
        {[
          "Image/Video",
          "Survey",
          "3D Model/Scan",
          "Site Inspect",
          "Get a New Perspective of your Site or Scene",
        ].map((use_case) => (
          <li key={use_case}>{use_case}</li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row gap-10 md:gap-[10%]">
        <Picture
          src="/image/services/drone/d1.jpg"
          alt="Drone Controls Image"
          override
          className="w-full md:w-[45%] h-auto"
        />
        <Picture
          src="/image/services/drone/d2.jpg"
          alt="Drone Controls Image"
          override
          className="w-full md:w-[45%] h-auto"
        />
      </div>
    </div>
  );
};

export default drone;
