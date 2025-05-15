"use client";

import { useState } from "react";

const YouTubeEmbed = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden shadow-[0_0_10px_white] z-0">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          Loading...
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default YouTubeEmbed;
