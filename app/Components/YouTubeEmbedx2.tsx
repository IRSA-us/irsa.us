import YouTubeEmbed from "./YouTubeEmbed";

const YouTubeEmbedx2 = ({ id, desc }: { id: string[]; desc: string[] }) => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="md:w-5/10">
          <YouTubeEmbed id={id[0]} />
        </div>

        <div className="md:w-5/10 -mt-5 md:mt-0">
          <p className="md:mt-5 text-center md:text-left xl:text-lg">
            {desc[0]}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse w-full gap-10">
        <div className="md:w-5/10">
          <YouTubeEmbed id={id[1]} />
        </div>

        <div className="flex items-end md:w-5/10 -mt-5 md:mt-0">
          <p className="md:mb-5 text-center md:text-right xl:text-lg">
            {desc[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbedx2;
