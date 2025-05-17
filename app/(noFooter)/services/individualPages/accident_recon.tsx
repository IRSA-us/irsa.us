import PanelDivider from "@/app/Components/PanelDivider";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import YouTubeEmbedMulti from "@/app/Components/YouTubeEmbedMulti";
import Image from "next/image";

const accidentTypes = [
  "Automotive/Transportation",
  "Mechanical",
  "Industrial",
  "Electrical",
  "Hydraulic",
  "Chemical",
  "Thermodynamics/Fires",
];

const accident_recon = () => {
  return (
    <>
      <div className="tintedPanel flex flex-col items-center gap-10 py-10 px-[5%] 2xl:px-[15%] mb-50">
        <h1 className="font-bold text-2xl md:text-3xl text-center">
          The process of investigating, analyzing, and drawing conclusions about
          the <span className="text-[var(--gold)]">events</span>,{" "}
          <span className="text-[var(--gold)]">parameters</span>, and{" "}
          <span className="text-[var(--gold)]">causes</span> of an accident.
        </h1>
        <PanelDivider />
        <ul>
          {accidentTypes.map((type, i) => (
            <li
              className="font-bold text-lg md:text-2xl text-center"
              key={"accientType_" + i}
            >
              {type}
            </li>
          ))}
        </ul>
        <PanelDivider />

        <div className="w-full md:w-7/10 h-auto overflow-hidden shadow-[0_0_8px_white]">
          <Image
            src={"/image/services/accident_recon/crashSim.gif"}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
            alt={"Crash Simulation"}
          />
        </div>

        <p className="text-lg md:text-2xl text-center">
          The Lab has been involved in <StyledList items={["thousands"]} /> of
          traffic collision investigations. With extensive knowledge of{" "}
          <StyledList
            items={[
              "vehicle kinematics",
              "skid-mark examination",
              "vehicle code research",
              "signal-phase patterns",
              "perception-reaction analysis",
            ]}
          />
          ; we provide state-of-the-art reconstruction to uncover the facts in
          an accident.
        </p>
      </div>

      <div className="tintedPanel flex flex-col items-center gap-5 py-10 px-5 lg:px-30 2xl:px-75 mb-50">
        <h1 className="text-[var(--gold)] font-bold text-3xl md:text-4xl text-center">
          Transportation Accidents
        </h1>
        <PanelDivider className="-mt-5" height={2} />
        <p className="font-bold text-lg md:text-2xl text-center mb-10">
          Automotive, Truck/Tractor Trailer, Bicycle, Motorcycle, Railroad,
          Ship, Aircraft, Pedestrian
        </p>

        <h1 className="text-[var(--gold)] font-bold text-xl md:text-3xl">
          Automotive Accidents
        </h1>
        <p className="text-base md:text-xl text-center">
          To unveil the truth of automotive accidents, we calculate and download
          <RouteLink href={"/services/cdr"} label={"Crash Data"} />
          (EDR), impacts, delta velocity, velocity of G-forces, jerk,
          conservation of energy as well as measure crush-depth analysis.
        </p>
        <p className="text-base md:text-xl md:mb-10 text-center">
          In Red Light Disputes, High-Speed Collisions, Vehicle Rollovers,
          Multi-Vehicle Accidents, etc.
          <RouteLink href={"/services/animations"} label={"Animations"} />
          and
          <RouteLink href={"/services/simulations"} label={"Simulations"} />
          are vital resources in re-enacting the incident to view, effectively
          communicate, and calculate the subject incident. Working with our
          <RouteLink href={"/services/biomechanics"} label={"Biomechanics"} />
          and
          <RouteLink href={"/services/human_factors"} label={"Human Factors"} />
          specialists, we have produced and created over 200 automotive
          simulations.
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "gLcC29QpkJQ?si=xrBBtROlk91PdMA7",
              desc: "A van fails to stop at a stop sign and collides with oncoming traffic. The van takes a tight turn onto the highway indicating he had no intention of stopping.",
            },
            {
              id: "HpjIw6kwwvY?si=FiRMc9QCqTE-Oyq9",
              desc: "In heavy traffic, the number one and two lanes stopped to allow a vehicle to make a left-turn. The vehicle did not check the number three lane resulting in a collision.",
            },
          ]}
        />

        <h1 className="text-[var(--gold)] font-bold text-xl md:text-3xl mt-30">
          Bicycle Accidents
        </h1>
        <p className="text-base md:text-xl md:mb-10 text-center">
          In 2024, there were
          <span className="text-[var(--gold)]"> 42,000</span> reported bicycle
          accidents in the United States. Often, bicyclists endure injuries that
          could be prevented if they were wearing a helmet and/or other
          protective gear.
          <br />
          <br />
          We conduct Accident Reconstruction,{" "}
          <RouteLink href={"/services/biomechanics"} label={"Biomechanics"} />,
          and{" "}
          <RouteLink href={"/services/human_factors"} label={"Human Factors"} />{" "}
          assessments. We decipher whether it was an imminent peril or another
          factor that could have limited or prevented injuries/accident along
          with performing calculations, measurements, and collecting data
          supporting our peer reviewed/scientific theories.
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "GXKWMU7EOyY?si=A_Prp58PTLfPnW46",
              desc: "A bicyclist was riding on a street when the battery on his electric bicycle came loose and fell to the ground. The bicyclist applied the front brakes and was ejected. He landed on a part of his head that would have been protected if he had been wearing a helmet.",
            },
            {
              id: "XAGdqKNyDw0?si=-QpgATMpy3aBer2p",
              desc: "The SUV driver claims to have stopped at the stop sign while the bicyclist claims that the SUV driver did not stop at the stop sign.",
            },
          ]}
        />

        <h1 className="text-[var(--gold)] font-bold text-xl md:text-3xl mt-30">
          Motorcycle Accidents
        </h1>
        <p className="text-base md:text-xl md:mb-10 text-center">
          Motorcycle accidents are very prevalent. They can happen on the
          freeway, canyon, or another roadway. It is vital to wear a helmet and
          other protective gear to ensure a level of safety. However,
          motorcyclists can still get injured.
          <br />
          <br />
          Motorcycle analysis is highly specialized. At IRSA, we have done
          numerous motorcycle cases using a variety of technical instruments and
          procedures. We include factors such as
          <StyledList
            items={[
              "drag factor",
              "rider trajectory",
              "skid marks",
              "impact velocity",
              "impact surface",
            ]}
          />
          .
          <br />
          <br />
          IRSA Engineers reconstruct the accident by doing a
          <RouteLink href={"/services/threeD"} label={"3D Scan"} /> of the site,
          3D scale model, obtaining the{" "}
          <RouteLink href={"/services/cdr"} label={"CDR"} /> information (if a
          vehicle was involved) as well as produce{" "}
          <RouteLink
            href={"/services/simulations"}
            label={"simulations"}
            endspc={false}
          />
          /
          <RouteLink
            href={"/services/animations"}
            label={"animations"}
            startspc={false}
            endspc={false}
          />
          .
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "JHuNV3_VyLw?si=7XxNswjQHE25VmEq",
              desc: "A motorcyclist, traveling on a roadway with many grade changes and curves, fails to pay attention to the intersection sign ahead. Had he been traveling at the cautionary speed of 35 mph; the accident could have been avoided.",
            },
            {
              id: "JmRW-6nCa3Q?si=psytF2ATfGqB8dSF",
              desc: "Two kids riding on a dirt bike attempt to cross a T-intersection and failed to see the oncoming vehicle. Both motorists claim that they could not see each other through the bushes. If the dirt bike rider had stopped in the median before crossing traffic, he could have avoided the accident.",
            },
          ]}
        />

        <h1 className="text-[var(--gold)] font-bold text-xl md:text-3xl mt-30">
          Pedestrian Accidents
        </h1>
        <p className="text-base md:text-xl md:mb-10 text-center">
          Pedestrians can be struck by{" "}
          <StyledList
            items={[
              "vehicles",
              "motorcycles",
              "sidewalk/curb inconsistencies",
              "an impact velocity",
              "environmental/physical factors",
            ]}
            conjunction={"or other"}
          />
          . As a result, it can cause substantial injuries or fatalities. The
          movement and location of a pedestrian during an impact can help us in
          discerning the resulting injuries that were caused.
          <br />
          <br />
          At IRSA, we connect the pedestrian injury and the nature of the “hit.”
          We look at the kinematics, dynamics, injury mechanisms, injury
          criteria, and other biomechanical/reconstructive aspects of a
          pedestrian impact.
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "bqKWqIbzGN4?si=tq17Pbp42vjpiDUL",
              desc: "A pedestrian walks from the bank to the Marshalls across the street. Unfortunately for the pedestrian, a Ford Edge, who had just completed a U-turn was looking in his side view mirrors in attempt to change lanes toward the left turn lane. This video demonstrates that had the pedestrian been looking towards her right, she would have had a clear view of the approaching traffic and would have seen a vehicle close enough to constitute a hazard.",
            },
            {
              id: "DDlttiV9YTI?si=brvUTl_8xH9-7ifA",
              desc: "A pedestrian runs into the roadway directly in front of a vehicle. The vehicle reacts by swerving and braking, but is still unable to avoid striking the pedestrian.",
            },
          ]}
        />

        <h1 className="text-[var(--gold)] font-bold text-xl md:text-3xl text-center mt-30">
          Truck/Tractor Trailer Accidents
        </h1>
        <p className="text-base md:text-xl md:mb-10 text-center">
          Over <StyledList items={["150,000"]} /> tractor trailer accidents
          occur in the United States each year.
          <br />
          <br />
          IRSA creates{" "}
          <RouteLink
            href={"/services/simulations"}
            label={"simulations"}
            endspc={false}
          />
          , calculations, and other scientific methods to assist in Accident
          Reconstruction,{" "}
          <RouteLink
            href={"/services/biomechanics"}
            label={"Biomechanics"}
            endspc={false}
          />
          , and{" "}
          <RouteLink href={"/services/human_factors"} label={"Human Factor"} />
          outcomes.
          <br />
          <br />
          We perform truck crash data retrieval, which is different than vehicle
          <RouteLink href={"/services/cdr"} label={"CDR"} endspc={false} />
          ’s.
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "NFWKz9_5SeY?si=aoAu8rB6aRQtlwM9",
              desc: "A motorist under the influence enters into the opposite lane of travel in order to pass a tractor trailer. As a result, an oncoming vehicle swerves onto the dirt shoulder to avoid a collision and over-corrects to get back on the highway and loses control of their vehicle.",
            },
            {
              id: "21fgLk_dqMk?si=BQ_IN9hSnjG8fkLI",
              desc: "A tractor trailer makes an unsafe lane change into a Lexus. The viewpoints of the various parties are depicted.",
            },
          ]}
        />
      </div>

      <div className="tintedPanel flex flex-col items-center gap-5 py-10 px-5 lg:px-15 2xl:px-75 mb-50">
        <h1 className="text-[var(--gold)] font-bold text-3xl md:text-4xl text-center">
          Industrial Accidents
        </h1>
        <PanelDivider className="-mt-5" height={2} />
        <p className="w-9/10 font-bold text-lg md:text-2xl text-center mb-10">
          Construction sites, forklifts, cranes, pressure vessels, punch
          presses, rotating machinery, and radiation exposure.
        </p>
        <p className="text-center mb-10 md:text-xl">
          Accidents can occur anytime and anywhere. In regard to industrial
          accidents, we provide opinions that have been supported by
          <StyledList
            items={[
              "calculations",
              "testing",
              "simulations",
              "scientific concepts",
              "peer reviewed findings",
            ]}
          />
        </p>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "61dTFVUiEzw?si=wshxqFlXpM86XHdI",
              desc: "An employee of a grocery store is using a hand-operated forklift and fails to pay attention to the vehicles in the parking lot.",
            },
            {
              id: "0Nce99V-2zE?si=2s5fWQILH--OSZ0D",
              desc: "A roof company employee was moving a welder along the top of an unfinished roof structure. While moving along a truss line, the OSB deflected causing the tire of the welder cart to get stuck in a trough created by the OSB deflection. After recruiting some help, the weight of the welder cart and additional employees ultimately caused the joist hangers to fail and a section of the roof collapsed. This video shows the effect of the removal of a truss line that was in the original plans.",
            },
          ]}
        />
      </div>

      <div className="tintedPanel flex flex-col items-center gap-5 py-10 px-5 lg:px-15 2xl:px-75">
        <p className="text-center md:text-lg">
          IRSA also handles{" "}
          <RouteLink href="/services/criminal" label="criminal events" /> as it
          pertains to various theories of Accident Reconstruction, such as the
          angle of injury, impact forces, delta-V’s, bullet trajectories, and
          time/distance analyses.
        </p>
        <PanelDivider />
        <p className="text-center md:text-lg">
          For <StyledList items={["site inspections"]} />, the Lab has
          professional quality, multi-camera and video capabilities that allow
          scene re-creations to be simultaneously documented from multiple
          viewpoints. These views can be synced together to produce useful
          visual demonstrations with professional results.
        </p>
      </div>
    </>
  );
};

export default accident_recon;
