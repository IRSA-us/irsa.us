import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const imaging_science = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-20 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <h1 className="text-secondary text-4xl text-center">PHOTOMETRICS</h1>
      <div className="flex flex-col-reverse lg:flex-row">
        <Picture
          src="/image/services/photometrics/img1.jpg"
          alt="Metadata Extraction Example"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <p className="font-bold text-xl pb-20 lg:pb-0 lg:px-10">
          <StyledList items={["Photographs"]} /> hold a plethora of information
          that is neccesary in determining conclusions. At IRSA, we have the
          ability to duplicate the{" "}
          <StyledList items={["lighting", "contrast"]} /> of the site at the
          time of the accident.
          <br />
          <br />
          On many cases, we have pulled the <StyledList
            items={["metadata"]}
          />{" "}
          in order to find out the
          <StyledList
            items={[
              "time",
              "date",
              "latitude/longitude",
              "the exact camera",
              "exposure",
              "focal length",
              "direction of POV",
            ]}
            conjunction=""
          />
          , and a slew of other factors crucial to{" "}
          <RouteLink href="/services/accident_recon" label="Reconstruction" />{" "}
          and
          <RouteLink
            href="/services/biomechanics"
            label="Biomechanics"
            endspc={false}
          />
          .
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <Picture
          src="/image/services/photometrics/img2.jpg"
          alt="Camera Lens"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <div className="flex flex-col gap-5 items-center pb-20 lg:pb-0 lg:px-10">
          <p className="font-bold">
            <StyledList items={["Above"]} />, we see a mere fraction of
            information that can be collected from an image. Though it may be
            hard to read, if you look through the extracted data, you will see
            the <StyledList items={["creation source"]} /> of this image. <br />
            <br />
            Additionally, we conduct{" "}
            <StyledList items={["macro photography"]} /> to be able to capture
            particle-like material. This could help to obtain details in
            picture. Some examples include of this are , , hand characteristics
            (scraps and cuts), bullet hole patterns, and other objects. form.
          </p>
          <ul className="list-disc">
            {[
              "Scratches on wood floors",
              "Shoe markings",
              "Hand characteristics (e.g. scrapes and cuts)",
              "Bullet hole patterns",
            ].map((x) => (
              <li key={x} className="font-bold text-[var(--gold)]">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row">
        <Picture
          src="/image/services/photometrics/img3.jpg"
          alt="Camera Lens"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <p className="font-bold pb-20 lg:pb-0 lg:px-10">
          We use a variety of{" "}
          <StyledList items={["software", "applications"]} /> to not only gather
          and fully comprehend what is seen in a picture, but to also determine
          if a photo was <StyledList items={["altered"]} />.
          <br />
          <br />
          We are frequently asked to review and detect characteristics of an
          image to ensure the <StyledList items={["validity"]} /> of that
          photograph. The above analysis is an important function to execute
          because it may be a{" "}
          <StyledList
            items={["deciding factor", "contributor"]}
            conjunction="or"
          />{" "}
          in the{" "}
          <RouteLink href="/services/accident_recon" label="reconstruction" />{" "}
          stages of a case.
        </p>
      </div>

      <PanelDivider />

      <h1 className="text-secondary text-4xl text-center">VIDEOMETRICS</h1>
      <div className="flex flex-col-reverse lg:flex-row">
        <Picture
          src="/image/services/photometrics/video1.jpg"
          alt="Camera Lens"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <p className="font-bold text-xl pb-20 lg:pb-0 lg:px-10">
          At IRSA, we take part in <StyledList items={["Videography"]} />, more
          specifically, <StyledList items={["Video Forensics"]} />, a scientific
          assessment of a subject incident. We analyze the given footage through
          the latest software while ensuring we follow the best practices. We
          want to make sure the video is examined with the highest integrity and
          fullest professional knowledge.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <Picture
          src="/image/services/photometrics/video2.jpg"
          alt="Camera Lens"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <div className="flex flex-col gap-5 items-center pb-20 lg:pb-0 lg:px-10">
          <p className="font-bold">
            We are given large amounts of{" "}
            <StyledList items={["surveillance"]} /> and{" "}
            <StyledList items={["dash camera"]} /> footage;{" "}
            <StyledList items={["enhancing"]} /> it with forensic software in
            the common case of poor image quality.
            <br />
            <br />
            Video evidence will always be a valuable tool for unveiling the
            truth, though there are often hidden or muffled details. Our job is
            to <StyledList items={["enhance"]} />,{" "}
            <StyledList items={["insert visual aids"]} /> (e.g. tracking boxes),
            perform{" "}
            <StyledList items={["frame-by-frame analyses", "uncover"]} />{" "}
            information invisible to the untrained eye.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-0">
        <Picture
          src="/image/services/photometrics/img3.jpg"
          alt="Professional Camera"
          override
          className="w-full lg:w-5/10 h-auto"
        />
        <div className="flex flex-col">
          <p className="font-bold lg:pb-0 lg:px-10">
            Similar to Photometrics, we can duplicate the{" "}
            <StyledList items={["lighting", "contrast"]} /> of the site at the
            time of the accident. Furthermore, we are able to
          </p>
          <ul className="list-disc py-5 pl-15">
            {[
              "Track objects/motion",
              "Create Higher Clarity/Resolution",
              "Produce finer visual detail",
              "Handle various raw video formats",
              "Establish spatial relationships",
              "Perform 3D Analysis",
              "Read time codes",
              "Accurately recreate details/colors of the scene",
            ].map((v) => (
              <li key={v}>
                <span className="text-secondary">{v}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold lg:pb-0 lg:px-10">
            Our goal is to inspect, understand, and accurately communicate what
            was analyzed and discovered through the above processes. We have the
            ability to take this information and use it as a support for our
            other scientific findings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default imaging_science;
