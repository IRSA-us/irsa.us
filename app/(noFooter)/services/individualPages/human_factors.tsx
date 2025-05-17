import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const human_factors = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <div className="flex flex-col-reverse items-center md:flex-row gap-10">
        <div className="flex flex-col gap-20 md:w-5/10">
          <Picture
            src="/image/services/human_factors/fact1.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-5">
            <p className="text-center">
              Human Factors can be applied to various applications using the
              fundamentals of science. IRSA deals with Human Factors in various
              arenas such as:
            </p>
            <div className="flex justify-center">
              <ul>
                {[
                  "Transportation accidents",
                  "Slip/trip and falls",
                  "Peripheral vision",
                  "Warnings and labels",
                  "Voluntary vs. involuntary reactions",
                ].map((x) => (
                  <li key={x} className="font-bold text-[var(--gold)]">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Picture
            src="/image/services/human_factors/fact3.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col md:flex-col-reverse justify-around md:w-5/10 gap-25">
          <p className="font-bold text-center">
            A large part of our Human Factor evaluation involves studying the
            provided visual cue and assess whether a collision can be avoided
            with a <StyledList items={["reasonable"]} /> perception-response
            time.
            <br />
            <br />
            The <StyledList items={["diagram"]} />{" "}
            <>
              <span className="hidden md:inline">above</span>
              <span className="inline md:hidden">below</span>
            </>{" "}
            displays one of the many facets of Human Factors that IRSA applies
            their expertise. This diagram displays the{" "}
            <StyledList items={["vertical-perception vision range"]} />. This is
            an essential concept and often overlooked in injuries/accidents.
          </p>
          <Picture
            src="/image/services/human_factors/fact2.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <p className="font-bold text-center">
            Human Factors is the study of how humans behave{" "}
            <StyledList items={["physically", "psychologically"]} /> in relation
            to their environments. Human Factors include (but are not limited
            to):{" "}
            <StyledList
              items={[
                "Imminent peril perception/reaction time",
                "peripheral vision",
                "attention",
                "judgment and reasoning",
              ]}
              conjunction=""
            />
            , as well as other cognitive functions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default human_factors;
