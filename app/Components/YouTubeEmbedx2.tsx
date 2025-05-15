import PanelDivider from "./PanelDivider";
import YouTubeEmbed from "./YouTubeEmbed";

const YouTubeEmbedx2 = ({ id, desc }: { id: string[]; desc: string[] }) => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="md:w-5/10">
          <YouTubeEmbed id={id[0]} />
        </div>

        <div className="flex flex-col gap-5 md:w-5/10 ml-0 md:-ml-10 -mt-5 md:mt-0">
          <PanelDivider height={2} md />
          <p className="text-center md:text-left xl:text-lg ml-0 md:ml-10">
            {desc[0]}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse w-full gap-10">
        <div className="md:w-5/10">
          <YouTubeEmbed id={id[1]} />
        </div>

        <div className="flex flex-col gap-5 justify-end md:w-5/10 mr-0 md:-mr-10 -mt-5 md:mt-0">
          <p className="text-center md:text-left xl:text-lg mr-0 md:mr-10">
            {desc[1]}
          </p>
          <PanelDivider height={2} />
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbedx2;
