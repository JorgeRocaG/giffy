import React from "react";
import Gif from "components/Gif/Gif";
import { GifList } from "./styles";

export default function GifListComponent({ gifs }) {
  return (
    <GifList>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </GifList>
  );
}
