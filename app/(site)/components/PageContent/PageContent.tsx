"use client";
import { Song } from "@/types";
import React from "react";
import SongItem from "../SongItem";
import useOnPlay from "@/hooks/useOnPlay";

type PageContentProps = {
  songs: Song[];
};

const PageContent = ({ songs }: PageContentProps) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs Available</div>;
  } else {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {songs.map((item, index) => (
          <SongItem
            key={"Song" + index}
            data={item}
            onClick={(id: string) => onPlay(id)}
          />
        ))}
      </div>
    );
  }
};

export default PageContent;
