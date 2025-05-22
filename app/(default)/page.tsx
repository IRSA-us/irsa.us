import PanelDivider from "../Components/PanelDivider";
import TitleSlideshow from "../Components/Home/TitleSlideshow";
import "../Components/Home/HomeStyles.css";
import StatsBar from "../Components/Home/StatsBar";
import HomePageDescription from "../Components/Home/HomePageDescription";
import Tint from "../Components/Tint";
import HomeServices from "../Components/Home/HomeServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="slideShowContainer w-full h-screen relative">
        <TitleSlideshow />
      </div>

      <div className="w-8/10 tintedPanel mt-20">
        <StatsBar />
      </div>

      <div className="relative w-full flex flex-col items-center gap-y-20 mt-20">
        <Tint className="-z-100" alpha={0.5} />
        <PanelDivider height={3} />

        <div className="w-8/10 lg:w-6/10">
          <HomePageDescription />
        </div>

        <PanelDivider height={3} />
      </div>

      <div className="relative w-full flex flex-col items-center justify-center gap-y-20 overflow-hidden">
        <Image
          src="/image/home/homeServices/backdrop.jpg"
          alt="Services Visualizer"
          width={1000}
          height={0}
          className="absolute h-full w-auto object-cover -z-11"
        />
        <Tint className="-z-10 blur-[7px]" alpha={0.5} />
        <PanelDivider height={3} />
        <HomeServices />
        <PanelDivider height={3} />
      </div>
    </div>
  );
}
