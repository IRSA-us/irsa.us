import PanelDivider from "@/app/Components/Home/PanelDivider";
import Image from "next/image";

const modelData = [
  {
    src: "/image/services/threeD/model1.jpg",
    desc: "By using a physical model, one can maneuver and manipulate a person, car, or other subject that is pertinent to the incident.",
  },
  {
    src: "/image/services/threeD/model2.jpg",
    desc: "The 3D model of a site, subject, or accident scene is created and mirrored by reviewing case pictures, performing a physical inspection, and/or utilizing 3D Scan software.",
  },
  {
    src: "/image/services/threeD/printer3d.jpg",
    desc: "The model components are designed, built, sourced, and/or 3D printed directly by IRSA engineers.",
  },
  {
    src: "/image/services/threeD/model3.jpg",
    desc: "The application of physical models include depositions, arbitrations, and trials. We thoroughly discuss how the model was built, how it works, and the best most of transporting the display.",
  },
];

const threeD = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-20 px-10 md:px-30 2xl:px-80">
      <h1 className="text-4xl text-center text-[var(--gold)]">3D Scanning</h1>

      <p className="font-bold text-lg md:text-2xl text-center">
        3D scanning is a vital tool in Forensic Science, allowing for a{" "}
        <span className="text-[var(--gold)]"> digital</span> or
        <span className="text-[var(--gold)]"> physical</span> representation of
        an environment, object, scene, or event that is much easier for viewers
        to process and use than the actual subject. Moreover, three-dimensional
        data is the primary prerequisite of creating high quality simulations,
        animations, diagrams, and models.
      </p>

      <Image
        src="/image/services/threeD/scannerDiagram.png"
        alt="Scanner Diagram"
        height={0}
        width={500}
        style={{ height: "500px", width: "auto" }}
      />

      <p className="font-bold text-lg md:text-2xl">
        Our Lab utilizes multiple enterprise-level{" "}
        <span className="text-[var(--gold)]"> 3D LiDAR scanners</span> to
        provide accurate and detailed scans. In conjunction with sophisticated
        rendering software and 3D scale modeling hardware, our engineers provide
        the highest quality scans and physical models for your case.
      </p>

      <PanelDivider />

      <p className="font-bold text-lg md:text-3xl">
        Below is a <span className="text-[var(--gold)]"> raw scan</span> of a
        crash scene from a hit and run case.
      </p>

      <Image
        src="/image/services/threeD/rawScan.jpg"
        alt="Raw Scan Example"
        height={0}
        width={0}
        style={{
          height: "auto",
          width: "100%",
          boxShadow: "0 0 20px var(--gold), 0 0 30px white",
        }}
        className="rounded-2xl"
      />

      <PanelDivider height={1} />

      <div className="w-full flex flex-col xl:flex-row items-center gap-5 md:gap-20">
        <p className="text-sm md:text-lg xl:text-lg">
          <>
            <span className="xl:hidden">Below</span>
            <span className="hidden xl:inline">To the right</span>
          </>{" "}
          is the <span className="text-[var(--gold)]"> Faro Focus X330</span> 3D
          scanner, one of the devices our Lab utilizes. The scanner provides
          very precise mappings of its environment. First, the laser scanner
          emits a laser beam from a rotating mirror out towards the area being
          scanned. Then, the unit distributes the laser beam to a vertical range
          of 300° and a horizontal range of 360°. The laser beam is then
          reflected to the scanner by the object in its path. The distance to
          the object defining an area is calculated as well as the relative
          vertical and horizontal angles. The data is captured and transmitted
          via WLAN for calculating exact 3D renderings. The Forensic Scientists
          at IRSA are all trained in the proper operation of the 3D scanner.
        </p>
        <Image
          src="/image/services/threeD/focusX330.jpg"
          alt="Scanner Diagram"
          height={0}
          width={500}
          style={{
            height: "auto",
            width: "100%",
            boxShadow: "0 0 15px white",
          }}
          className="rounded-lg xl:hidden"
        />
        <Image
          src="/image/services/threeD/focusX330.jpg"
          alt="Scanner Diagram"
          height={0}
          width={500}
          style={{
            height: "auto",
            width: "400px",
            boxShadow: "0 0 15px white",
          }}
          className="rounded-lg hidden xl:block"
        />
      </div>

      <h1 className="text-4xl text-center text-[var(--gold)] mt-20">
        3D Modeling
      </h1>

      <p className="font-bold text-lg md:text-2xl text-center">
        A 3D Model is a scaled representation of a scene, which can be a vital
        visual tool in showing how an accident happened. These models may be
        <span className="text-[var(--gold)]"> digital</span>, as seen above, or
        <span className="text-[var(--gold)]"> physical</span>, as discussed
        below.
      </p>

      <PanelDivider />

      <div className="flex flex-col gap-10">
        {modelData.map((model) => (
          <div className="flex flex-col gap-10 items-center" key={model.src}>
            <Image
              src={model.src}
              height={0}
              width={500}
              style={{
                height: "auto",
                width: "50vw",
                boxShadow: "0 0 15px white",
              }}
              alt="3D Model Example"
              className="rounded-lg xl:hidden"
            />
            <Image
              src={model.src}
              height={0}
              width={500}
              style={{
                height: "auto",
                width: "25vw",
                boxShadow: "0 0 15px white",
              }}
              alt="3D Model Example"
              className="rounded-lg hidden xl:block"
            />
            <p className="text-xl text-center max-w-[800px]">{model.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default threeD;
