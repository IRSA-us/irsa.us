import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const AlexCapello = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Capello works with the{" "}
        <RouteLink
          href="/services/imaging_science"
          label="Videometrics and Photometrics"
        />{" "}
        division. He has the ability to duplicate the{" "}
        <StyledList items={["lighting", "contrast"]} conjunction2=" and " />{" "}
        (both video and photo) of the site at the time of the accident as well
        as extract <StyledList items={["metadata"]} /> from images. He can also
        take <StyledList items={["macro photographs"]} />.
      </p>

      <p className="text-center text-xl">
        In addition to the above, Mr. Capello possesses the capabilities to
        duplicate injuries with the use of{" "}
        <StyledList items={["special effects"]} /> techniques, create realistic
        <RouteLink href="/services/threeD" label="3D Models" endspc={false} />,
        and download and{" "}
        <RouteLink
          href="/services/cdr"
          label="retrieve crash data"
          endspc={false}
        />
        .
      </p>
    </div>
  );
};

export default AlexCapello;
