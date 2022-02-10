import React from "react";
import Gif from "components/Gif/Gif";
import "./GifList.css";

export default function GifList({ gifs }) {
  return (
    <div className="GifList">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
