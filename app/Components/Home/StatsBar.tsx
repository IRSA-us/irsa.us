import classNames from "classnames";
import StatGauge from "./StatGauge";
import PanelDivider from "../PanelDivider";

import { IoFileTrayFull, IoCalendarSharp } from "react-icons/io5";
import { GiScales } from "react-icons/gi";

const iconSizing = classNames("h-10 w-10 xl:h-18 xl:w-18");

const StatsBar = () => {
  return (
    <>
      <div className="w-full pt-5 px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-50 text-center">
        <p className="text-lg xl:text-2xl 2xl:text-3xl">
          Providing the highest quality{" "}
          <span className="italic">Litigation Support</span> since 1974.
        </p>
      </div>
      <div
        className={classNames({
          "w-full flex items-center p-10 xl:py-20 gap-10": true,
          "flex-col justify-center": true,
          "md:flex-row md:justify-around": true,
        })}
      >
        <StatGauge
          stat="Cases"
          value={15000}
          plus
          icon={<IoFileTrayFull className={iconSizing} />}
        />
        <PanelDivider mobile />
        <StatGauge
          stat="Years of Service"
          value={50}
          plus
          icon={<IoCalendarSharp className={iconSizing} />}
        />
        <PanelDivider mobile />
        <StatGauge
          stat="Lawyers"
          value={3000}
          plus
          icon={<GiScales className={iconSizing} />}
        />
      </div>
    </>
  );
};

export default StatsBar;
