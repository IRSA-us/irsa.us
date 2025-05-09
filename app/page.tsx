import PanelDivider from "./Components/Home/PanelDivider";
import TitleSlideshow from "./Components/Home/TitleSlideshow";
import "./Components/Home/HomeStyles.css";
import StatsBar from "./Components/Home/StatsBar";
import HomePageDescription from "./Components/Home/HomePageDescription";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-20">
            <div className="slideShowContainer w-full h-screen relative">
                <TitleSlideshow />
            </div>

            <div className="w-8/10 tintedPanel">
                <StatsBar />
            </div>

            <div
                className="w-full flex flex-col items-center gap-y-20"
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
                <PanelDivider height={3} />

                <div className="w-8/10 lg:w-6/10">
                    <HomePageDescription />
                </div>

                <PanelDivider height={3} />
            </div>
        </div>
    );
}
