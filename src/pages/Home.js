import React, { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import Loader from "components/Loader/Loader";
import GifList from "components/GifList/GifList";
import TrendingSearches from "components/TrendingSearches/LazyTrendingSearches";
import SearchForm from "components/SearchForm/SearchForm";

export default function Home() {
  const [, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
