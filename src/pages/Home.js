import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../hooks/useGifs";
import Loader from "../components/Loader/Loader";
import GifList from "../components/GifList/GifList";
import Category from "../components/Category/Category";
import TrendingSearches from "../components/TrendingSearches/TrendingSearches";

const POPULAR_GIFS = ["pandas", "axolotes", "pingüinos"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Buscar gifs..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <input type="submit" value="Buscar" />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          {loading ? <Loader /> : <GifList gifs={gifs} />}
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
