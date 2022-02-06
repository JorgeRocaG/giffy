import React from "react";
import GifList from "../components/GifList/GifList";

export default function SearchResults({ params }) {
  return <GifList params={params} />;
}
