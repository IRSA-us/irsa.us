import PanelDivider from "@/app/Components/Home/PanelDivider";
import Image from "next/image";

const threeD = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-20 px-80">
      <p className="font-bold text-2xl text-center">
        3D scanning is a vital tool in Forensic Science, allowing for a digital
        or physical representation of an environment, object, scene, or event
        that is much easier for viewers to process and use than the actual
        subject. Moreover, three-dimensional data is the primary prerequisite of
        creating high quality simulations, animations, diagrams, and models.
      </p>

      <Image
        src="/image/services/threeD/scannerDiagram.png"
        alt="Scanner Diagram"
        height={0}
        width={500}
        style={{ height: "500px", width: "auto" }}
      />

      <p className="font-bold text-2xl">
        Our Lab utilizes multiple enterprise-level 3D LiDAR scanners to provide
        accurate and detailed scans. In conjunction with sophisticated rendering
        software and 3D scale modeling hardware, our engineers provide the
        highest quality scans and physical models for your case.
      </p>

      <PanelDivider />

      <p className="font-bold text-3xl">
        Below is a raw scan of a crash scene from a hit and run case.
      </p>

      <Image
        src="/image/services/threeD/rawScan.jpg"
        alt="Raw Scan Example"
        height={0}
        width={0}
        style={{
          height: "700px",
          width: "auto",
          boxShadow: "0 0 20px var(--gold), 0 0 30px white",
        }}
        className="rounded-2xl mb-10"
      />

      <PanelDivider />

      <div className="w-full h-[400px] flex items-center gap-20">
        <p className="font-old text-xl">
          To the right is the Faro Focus X330 3D scanners, one of the devices
          our Lab utilizes. The scanner provides very precise mappings of its
          environment. First, the laser scanner emits a laser beam from a
          rotating mirror out towards the area being scanned. Then, the unit
          distributes the laser beam to a vertical range of 300° and a
          horizontal range of 360°. The laser beam is then reflected to the
          scanner by the object in its path. The distance to the object defining
          an area is calculated as well as the relative vertical and horizontal
          angles. The data is captured and transmitted via WLAN for calculating
          exact 3D renderings. The Forensic Scientists at IRSA are all trained
          in the proper operation of the 3D scanner.
        </p>
        <Image
          src="/image/services/threeD/focusX330.jpg"
          alt="Scanner Diagram"
          height={0}
          width={300}
          style={{ height: "350px", width: "auto" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default threeD;
