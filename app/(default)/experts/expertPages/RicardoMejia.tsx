import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const RicardoMejia = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Mejia’s experience involves working as a{" "}
        <StyledList items={["Civil Engineer"]} /> for Topanga Underground in
        Agoura, CA. While working for Topanga Underground, he{" "}
        <StyledList items={["designed", "drafted"]} /> private sewage disposal
        systems and water mains for private homes and commercial businesses, and
        supervised maintenance projects.{" "}
      </p>

      <p className="text-center text-xl">
        Mr. Mejia’s Civil Engineering degree demonstrates a thorough
        understanding of basic principles of Physics, Traffic Design, Materials
        Science, and Engineering. He specializes in{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />{" "}
        as it relates to transportation accidents, premises liability, and
        industrial accidents. For <StyledList items={["traffic accidents"]} />,
        he uses his skills to calculate angles of impact, crush depths,
        delta-V’s, G-forces, and speeds of impact. For{" "}
        <RouteLink href="/services/premises" label="premises liability" /> and
        industrial accidents, he utilizes his knowledge of the UBC, ANSI, and
        OSHA standards to determine liability.{" "}
      </p>

      <p className="text-center text-xl">
        Mr. Mejia employs the discipline of Accident Reconstruction to assess
        alternative designs, and safety practices and procedures as they relate
        to post-accident evaluation. He has been involved in over{" "}
        <StyledList items={["1700 forensic investigations"]} /> which have
        included automotive, bicycle, pedestrian, slip-and-fall accidents, and
        building and safety code violations.{" "}
      </p>

      <p className="text-center text-xl">
        Mr. Mejia also utilizes his skills in creating{" "}
        <RouteLink
          href="/services/animations_simulations"
          label="computer simulations"
        />{" "}
        and CAD diagrams. Based on the engineering calculations performed for
        the reconstruction, he formulates computer simulations demonstrating
        Accident Reconstruction, Biomechanics, and Human Factors principles.
      </p>
    </div>
  );
};

export default RicardoMejia;
