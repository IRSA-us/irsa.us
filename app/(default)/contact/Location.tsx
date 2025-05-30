import Map from "../../Components/MainOfficeMap";
import { FaPhone } from "react-icons/fa6";
import { MdFax } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PanelDivider from "@/app/Components/PanelDivider";

const Location = ({ onMapLoad }: { onMapLoad: () => void }) => {
  const InfoRowStyle = "w-full flex gap-5 items-center";
  const IconStyles =
    "w-[8%] md:w-[5%] lg:w-[8%] xl:w-[5%] h-auto aspect-square";
  const ValueStyles =
    "w-[92%] md:w-[95%] lg:w-[92%] xl:w-[95%] text-white text-xl";

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
      <div className="w-full lg:w-4/10 flex flex-col gap-5">
        <h1 className="w-full text-4xl text-center">Main Office</h1>
        <div className="flex flex-col gap-5 text-secondary">
          <div className={InfoRowStyle}>
            <FaPhone className={IconStyles} />
            <h2 className={ValueStyles}>818.348.1133</h2>
          </div>
          <PanelDivider />
          <div className={InfoRowStyle}>
            <MdFax className={IconStyles} />
            <h2 className={ValueStyles}>818.348.4484</h2>
          </div>
          <PanelDivider />
          <div className={InfoRowStyle}>
            <FaMapMarkerAlt className={IconStyles + " text-[rgb(234,67,53)]"} />
            <h2 className={ValueStyles}>
              5324 Canoga Ave. Woodland Hills CA. 91364
            </h2>
          </div>
          <PanelDivider />
          <div className={InfoRowStyle}>
            <MdEmail className={IconStyles} />
            <h2 className={ValueStyles}>
              expert@irsa.us
              <br />
              kenneth@irsa.us
            </h2>
          </div>
          <PanelDivider />
        </div>
      </div>
      <div className="w-full lg:w-4/10 aspect-[1.5] h-auto">
        <Map onMapLoad={onMapLoad} />
      </div>
    </div>
  );
};

export default Location;
