import PanelDivider from "@/app/Components/PanelDivider";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import React from "react";

const LibradoMancilla = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Mancilla holds a{" "}
        <StyledList
          items={["Bachelor of Science", "Physics"]}
          conjunction2=" in "
        />{" "}
        from California State Polytechnic University, Pomona, where he studied
        key principles of physics, including optics, kinematics, thermodynamics,
        electromagnetism, and computer-aided analysis. He leverages this strong
        foundation in physics to conduct detailed{" "}
        <RouteLink
          href="/services/accident_recon"
          label="accident reconstruction"
          endspc={false}
        />{" "}
        for various types of incidents, including, but not limited to,{" "}
        <StyledList items={["transportation accidents"]} /> and{" "}
        <RouteLink
          href="/services/premises"
          label="premises liability"
          endspc={false}
        />{" "}
        cases. He also applies his knowledge of{" "}
        <RouteLink href="/services/human_factors" label="human factors" />
        and <RouteLink href="/services/biomechanics" label="biomechanics" />
        to assist in accident reconstruction.
      </p>
      <p className="text-center text-xl">
        In <StyledList items={["transportation accident"]} /> reconstruction,
        Mr. Mancilla uses advanced problem-solving skills to analyze critical
        factors such as impact angles, crush depths, velocity changes, vehicle
        speeds, and the forces involved in vehicular collisions. Mr. Mancilla is
        also certified to perform{" "}
        <RouteLink href="/services/cdr" label="Event Data Recorder" /> (EDR)
        imaging from vehicles that support it. EDR imaging can yield critical
        information related to vehicle collisions (like pre-impact speed,
        steering angle, and brake usage), and Mr. Mancilla is qualified to
        analyze this data. Additionally, Mr. Mancilla can also use his{" "}
        <StyledList
          items={["computer skills", "animations"]}
          conjunction2=" to create "
        />{" "}
        of different types of accidents for demonstrative purposes which can
        incorporate{" "}
        <RouteLink href="/services/threeD" label="3D Scans" endspc={false} />.
        Mr. Mancilla is also able to use specialized software to create
        simulations which can aid in accident reconstruction and creating
        demonstrative aids.
      </p>
      <p className="text-center text-xl">
        Mr. Mancilla employs the discipline of{" "}
        <StyledList items={["accident reconstruction"]} /> to analyze safety in
        designs, practices, and procedures. His forensic investigations have
        included the following types of accidents: automobile vs. automobile;
        automobile vs. pedestrian; slip and fall; trip and fall; and premises
        liability.
      </p>
      <PanelDivider />
      <h1 className="text-3xl text-secondary">EXEMPLAR CASE WORK</h1>
      <p className="text-center text-xl">
        In one{" "}
        <StyledList items={["automobile", "pedestrian"]} conjunction2=" vs. " />{" "}
        case, the driver of the vehicle was alleged to have been speeding when
        they impacted a pedestrian, and it was alleged that driver inattention
        was a factor. Mr. Mancilla used available evidence to{" "}
        <StyledList items={["determine the speed"]} /> of the impact of the
        vehicle and showed that vehicle was traveling at or under the speed
        limit at the time of the collision. Additionally, Mr. Mancilla used
        principles of <StyledList items={["human factors"]} /> to show that an
        average driver traveling at the speed limit would have insufficient time
        to perceive and react to the pedestrian who stepped out into traffic.
      </p>
    </div>
  );
};

export default LibradoMancilla;
