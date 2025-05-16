import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const photometrics = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-5 2xl:px-70">
      <div className="flex flex-col-reverse items-center md:flex-row gap-10">
        <div className="flex flex-col gap-20 md:w-5/10">
          <Picture
            src="/image/services/photometrics/img1.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <div className="flex flex-col gap-5">
            <p className="font-bold text-center">
              <StyledList items={["Above"]} />, we see a mere fraction of
              information that can be collected from an image. Though it may be
              hard to read, if you look through the extracted data, you will see
              the <StyledList items={["creation source"]} /> of this image.{" "}
              <br />
              <br />
              Additionally, we conduct{" "}
              <StyledList items={["macro photography"]} /> to be able to capture
              particle-like material. This could help to obtain details in
              picture. Some examples include of this are , , hand
              characteristics (scraps and cuts), bullet hole patterns, and other
              objects. form.
            </p>
            <div className="flex justify-center">
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
          <Picture
            src="/image/services/photometrics/img2.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-col-reverse justify-around md:w-5/10 gap-25">
          <p className="font-bold text-center">
            We use a variety of{" "}
            <StyledList items={["software", "applications"]} /> to not only
            gather and fully comprehend what is seen in a picture, but to also
            determine if a photo was <StyledList items={["altered"]} />.
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
          <Picture
            src="/image/services/photometrics/img3.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <p className="font-bold text-center">
            <StyledList items={["Photographs"]} /> hold a plethora of
            information that is neccesary in determining conclusions. At IRSA,
            we have the ability to duplicate the{" "}
            <StyledList items={["lighting", "contrast"]} /> of the site at the
            time of the accident.
            <br />
            <br />
            On many cases, we have pulled the{" "}
            <StyledList items={["metadata"]} /> in order to find out the
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
      </div>
    </div>
  );
};

export default photometrics;
