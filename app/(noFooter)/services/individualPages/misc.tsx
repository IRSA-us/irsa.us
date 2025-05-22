import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const misc = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-20 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <h1 className="text-secondary text-4xl text-center">
        LoE & VOCATIONAL ANALYSES
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <Picture
            src="/image/services/misc/loe1.jpg"
            alt="Hurt Neck"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
          <p className="w-full lg:w-[47.5%] h-auto text-xl font-bold">
            In an accident,{" "}
            <StyledList items={["Loss of wages and capabilities"]} /> refers to
            the income you would have received from your employer and the skills
            that you were able to perform. This period includes from the time of
            the accident to the date of settlement or judgement.
            <br />
            <br />
            We assess an individual’s{" "}
            <StyledList
              items={["skills", "abilities", "qualifications"]}
            />{" "}
            (pre and post injury) to determine whether he or she can return to
            work, relocate to a new position, or continue employment at all.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <div className="flex-col w-full lg:w-[47.5%]">
            <p className="h-auto text-xl font-bold">
              We calculate <StyledList items={["Loss of income"]} /> due to the
              subject incident by reviewing medical records, tax forms, pay
              stubs, retirement package, and researching inflation rates for
              future projections.
              <br />
              <br />
              We work with all avenues of We calculate{" "}
              <StyledList items={["Vocations"]} /> such as:
            </p>
            <ul className="list-disc pl-5 pt-5">
              {[
                {
                  name: "Labor",
                  desc: "(Construction, Landscaper, Mechanic, etc)",
                },
                {
                  name: "Education",
                  desc: "(Teacher, Administrator, Counselor, etc.)",
                },
                {
                  name: "Office Settings",
                  desc: "(Managers, Sales Associates, etc.)",
                },
                {
                  name: "Warehouses",
                  desc: "(Factory Workers/Co-Packers, etc)",
                },
                { name: "", desc: "Other Types of Employment" },
              ].map((v) => (
                <li key={v.name}>
                  <span className="font-bold text-secondary">{v.name}</span>{" "}
                  <span className="font-normal">{v.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <Picture
            src="/image/services/misc/loe2.jpg"
            alt="Gain vs. Loss Balance"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <Picture
            src="/image/services/misc/loe3.jpg"
            alt="Hurt Ankle"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
          <p className="w-full lg:w-[47.5%] h-auto text-xl font-bold">
            We provide a <StyledList items={["detailed written report"]} /> that
            demonstrates an individual's loss/potential earnings and current
            monetary capacity. We also include the individual’s employment
            limitations and/or adeptness.
          </p>
        </div>
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-4xl text-center">INVESIGATIONS</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <Picture
          src="/image/services/misc/investigations.jpg"
          alt="Investigations Visualizer"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <p className="w-full lg:w-5/10 h-auto text-xl font-bold">
          IRSA conducts <StyledList items={["background checks"]} /> using
          computer searches, <StyledList items={["interviews"]} /> people to
          gather vital information, <StyledList items={["researches"]} />{" "}
          locations of the given accident, <StyledList items={["examines"]} />{" "}
          records, <StyledList items={["reviews"]} /> surveillance footage as
          well as collect, interpret, analyze, and evaluate{" "}
          <StyledList items={["evidence"]} /> of the subject matter/case.
        </p>
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-4xl text-center">
        MEDIATION & ARBITRATION
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <Picture
          src="/image/services/misc/mediation.jpg"
          alt="Mediation & Arbitration Visualizer"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <p className="w-full lg:w-5/10 h-auto text-xl font-bold">
          <span className="italic">Dr. Kenneth Alvin Solomon</span>, IRSA Chief
          Forensic Scientist, has{" "}
          <StyledList items={["mediated", "arbitrated"]} /> over{" "}
          <span className="italic">1,000</span> cases since 1995.
          <br />
          <br />
          As an active member of the Pro Bono Panel for Los Angeles Superior
          Courts, he has utilized his technical skills in
          <RouteLink
            href="/services/accident_recon"
            label="Accident Reconstruction"
          />
          ,{" "}
          <RouteLink
            href="/services/biomechanics"
            label="Biomechanics"
            endspc={false}
          />
          , and{" "}
          <RouteLink
            href="/services/human_factors"
            label="Human Factors"
            endspc={false}
          />{" "}
          to resolve <span className="italic">several thousand</span> legal
          cases. The areas covered have included all forms of transportation
          accidents, premises liability, industrial accidents, recreational
          accidents, and products liability.
        </p>
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-4xl text-center">
        PRODUCT INTEGRITY & EVALUATION
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <Picture
            src="/image/services/misc/product.jpg"
            alt="Broken Chair"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
          <p className="w-full lg:w-[47.5%] h-auto text-xl font-bold">
            Successful companies focus on product integrity. In particular,
            sophisticated{" "}
            <StyledList items={["manufacturing quality", "high reliability"]} />{" "}
            of a good design are key elements of success. IRSA conducts and
            evaluates <StyledList items={["product designs"]} /> to ensure the
            safety, regulatory risks, and usability of the given items.
            <br />
            <br />
            We <StyledList items={["review", "analyze", "test"]} /> objects such
            as: Chairs, golf carts, ladders, motorized handicap carts, helmets,
            and automotive components. We look for quality, durability, and
            reliability. These evaluations are done in our laboratory.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <p className="w-full lg:w-[47.5%] h-auto text-xl font-bold">
            Our <StyledList items={["goal"]} /> within product integrity is to
            ensure an item was or was not adequately safe for a specific
            application in a given environment. In parallel, we{" "}
            <StyledList items={["verify"]} /> if a product is compliant with
            federal, state, and local regulations and standards.{" "}
          </p>
          <Picture
            src="/image/services/misc/product2.jpg"
            alt="Broken High Heels"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
        </div>
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-4xl text-center">WARNING LABELS</h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <Picture
            src="/image/services/misc/warning.jpg"
            alt="Broken Chair"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
          <p className="w-full lg:w-[47.5%] h-auto text-xl font-bold">
            Warnings and labels are vital pieces of information that communicate
            a <StyledList items={["hazardous environment"]} />. To warn is to
            place someone on advance notice of a danger or a potential danger.
            The purpose of a warning is to adjust behavior and ensure safety
            compliance. Therefore, warnings should be{" "}
            <StyledList items={["properly displayed"]} /> for easy viewing.
            However, <span className="italic">“failure to warn”</span> is still
            a common issue.
            <br />
            <br />
            Warnings can be found on products like{" "}
            <StyledList
              items={[
                "helmets",
                "machinery",
                "chairs",
                "ladders",
                "coffee lids",
                "construction sites",
                "pools/spas",
                "gym equipment",
                "safety manuals",
              ]}
            />{" "}
            of various products.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%]">
          <p className="w-full lg:w-[47.5%] h-auto text-xl">
            Warnings can take many forms. They are not just{" "}
            <StyledList items={["visual"]} />, but also{" "}
            <StyledList items={["auditory"]} /> (sound),{" "}
            <StyledList items={["olfactory"]} /> (smell), and{" "}
            <StyledList items={["tacticle"]} /> (touch). Similar to visual
            warnings, the above alerts capture the attention (or should) of an
            individual.
            <br />
            <br />
            The aforementioned information plays a crucial role in{" "}
            <RouteLink href="/services/human_factors" label="Human Factors" />
            because it can include elements like human-reaction time as well as
            visual and auditory signal cues. The Human Factors aspect also
            parallels to the{" "}
            <RouteLink href="/services/biomechanics" label="Biomechanics" /> of
            an individual.
            <br />
            <br />
            IRSA has developed industry standards regarding warnings on swimming
            pools. Our assessments propose alternative sections for{" "}
            <StyledList items={["improving safety levels"]} /> overall and
            <StyledList items={["reducing the risk"]} /> of unnecessary and
            preventable accidents.
          </p>
          <Picture
            src="/image/services/misc/warning2.jpg"
            alt="Broken High Heels"
            override
            className="w-full lg:w-[47.5%] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default misc;
