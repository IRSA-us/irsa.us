import YouTubeEmbed from "./YouTubeEmbed";

interface Props {
  embedData: { id: string; desc: string }[];
  className?: string;
}

const YouTubeEmbedMulti = ({ embedData, className }: Props) => {
  return (
    <div className={`flex flex-col gap-20 ${className}`}>
      {embedData.map((embedding, i) => (
        <div
          className={`flex flex-col ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-10`}
          key={embedding.id}
        >
          <div className="w-full lg:w-5/10">
            <YouTubeEmbed id={embedding.id} />
          </div>
          <div className="w-full lg:w-5/10">
            <p className="font-bold">{embedding.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeEmbedMulti;
