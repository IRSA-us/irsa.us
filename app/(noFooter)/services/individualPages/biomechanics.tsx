import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const biomechanics = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <h1 className="font-bold text-2xl md:text-3xl text-center">
        The science of applying <StyledList items={["mechanical laws"]} /> to
        analyze human movements.
      </h1>
      <PanelDivider />
      <p className="text-lg md:text-2xl text-center">
        Biomechanics is the study of how the body’s{" "}
        <StyledList items={["muscles", "bones", "tendons", "ligaments"]} />{" "}
        interact to produce movement—applying mechanical principles to
        understand injury mechanisms.
      </p>

      <Picture
        src="/image/services/biomechanics/bio1.jpg"
        alt="Biomechanics Visualizer"
      />

      <p className="text-lg md:text-2xl text-center">
        At IRSA, we use biomechanics to connect the dots between
        <RouteLink
          href={"/services/accident_recon"}
          label={"accident reconstruction"}
        />
        and medical diagnosis. Our analyses apply{" "}
        <StyledList items={["anatomy", "physics", "engineering"]} /> to assess
        whether reported injuries are consistent with the forces involved in a
        specific incident.
      </p>

      <Picture
        src="/image/services/biomechanics/bio2.jpg"
        alt="Biomechanics Visualizer"
      />

      <p className="text-lg md:text-2xl text-center">
        Doctors diagnose <StyledList items={["injuries"]} />; forensic engineers
        determine if those <StyledList items={["injuries"]} /> could have
        plausibly resulted from the accident. Confusing the two can lead to
        flawed conclusions. That’s why IRSA’s{" "}
        <StyledList items={["forensic engineers"]} /> focus solely on{" "}
        <StyledList items={["causation"]} />
        —using crash test data, injury biomechanics, and standards like HIC,
        BrIC, and NIC to offer objective, court-ready opinions grounded in
        science.
      </p>
    </div>
  );
};

export default biomechanics;
