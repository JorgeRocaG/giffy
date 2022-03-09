import React from "react";
import useGifs from "hooks/useGifs";
import Loader from "components/Loader/Loader";
import GifList from "components/GifList/GifList";
import TrendingSearches from "components/TrendingSearches/LazyTrendingSearches";
import SearchForm from "components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
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
