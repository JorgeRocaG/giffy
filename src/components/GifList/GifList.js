import React from "react";
import { useState, useEffect } from "react";
import getGifs from "../../services/getGifs";
import Gif from "../Gif/Gif";
import Loader from "../Loader/Loader";

export default function GifList({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
