import PanelDivider from "../Components/PanelDivider";
import TitleSlideshow from "../Components/Home/TitleSlideshow";
import "../Components/Home/HomeStyles.css";
import StatsBar from "../Components/Home/StatsBar";
import HomePageDescription from "../Components/Home/HomePageDescription";
import Tint from "../Components/Tint";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="slideShowContainer w-full h-screen relative">
        <TitleSlideshow />
      </div>

      <div className="w-8/10 tintedPanel">
        <StatsBar />
      </div>

      <div className="relative w-full flex flex-col items-center gap-y-20">
        <Tint className="-z-100" alpha={0.5} />
        <PanelDivider height={3} />

        <div className="w-8/10 lg:w-6/10">
          <HomePageDescription />
        </div>

        <PanelDivider height={3} />
      </div>
    </div>
  );
}
