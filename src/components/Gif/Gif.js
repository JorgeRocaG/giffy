import React from "react";
import Fav from "components/Fav/Fav";
import { Gif, GifFav, GifLink, GifImage, GifTitle } from "./styles";

function GifComponent({ id, title, url }) {
  return (
    <Gif>
      <GifFav>
        <Fav id={id} />
      </GifFav>
      <GifLink to={`/gif/${id}`} className="Gif-link">
        <GifImage loading="lazy" alt={title} src={url} />
        <GifTitle>{title}</GifTitle>
      </GifLink>
    </Gif>
  );
}

export default React.memo(GifComponent, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
