import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifList from "../components/GifList/GifList";
import Loader from "../components/Loader/Loader";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return <>{loading ? <Loader /> : <GifList gifs={gifs} />}</>;
}
