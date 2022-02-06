import React from "react";
import GifList from "../components/GifList/GifList";
import Loader from "../components/Loader/Loader";
import useGifs from "../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Loader /> : <GifList gifs={gifs} />}</>;
}
