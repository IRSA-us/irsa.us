import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import StyledList from "@/app/Components/StyledList";

const animations = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-20 py-10 lg:py-15 px-[5%] 2xl:px-[25%]">
      <h1 className="text-secondary text-5xl">ANIMATIONS</h1>
      <p className="font-bold text-center text-3xl">
        Missing evidence? No video? Bad Camera Angles? Rough Video Quality?
        <br />
        <br />
        These are problems all <StyledList items={["solved"]} /> by animations.
      </p>
      <p className="text-center text-xl">
        Our engineers investigate and gather information from your case to
        create professional, high-quality animations to shed light on the truth.
      </p>
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-lg">Faro Zone 3D Animation</h1>
        <Picture
          src="/image/services/animations_simulations/crashAnim.gif"
          alt="Crash Simulation"
          override
          className="w-full h-auto"
        />
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-5xl">SIMULATIONS</h1>
      <p className="font-bold text-center text-3xl">
        Imagine ability to <StyledList items={["tweak", "tune"]} /> any physical
        variable in your case and see <span className="italic">immediate</span>{" "}
        <StyledList items={["scientific results"]} />.
        <br />
        <br />
        Simulations turn your{" "}
        <StyledList items={["speculations", "reality"]} conjunction=" into " />.
      </p>

      <p className="text-center text-xl">
        Unlike <span className="italic">animations</span>, which are visual
        tools, <span className="italic">simulations</span> are{" "}
        <StyledList items={["scientific"]} />.
        <br />
        <br />
        They use precise{" "}
        <StyledList
          items={["formulae", "robust software", "Physics Engines"]}
        />{" "}
        based on the accpeted scientific literature to model the real world as
        accurately as possible.
        <br />
        <br />
        We simulate <span className="underline">everything</span> down to the{" "}
        <span className="italic">skid marks</span>.
      </p>
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-lg">Virtual Crash 4 Simulation</h1>
        <Picture
          src="/image/services/animations_simulations/crashSim.gif"
          alt="Crash Simulation"
          override
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default animations;
