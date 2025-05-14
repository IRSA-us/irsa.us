const YouTubeEmbed = ({ id }: { id: string }) => (
  <iframe
    src={`https://www.youtube.com/embed/${id}`}
    title="YouTube Video Player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="aspect-[16/9] w-full h-auto rounded-md overflow-hidden shadow-[0_0_10px_white]"
  />
);

export default YouTubeEmbed;
