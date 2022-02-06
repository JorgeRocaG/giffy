import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../hooks/useGifs";
import Loader from "../components/Loader/Loader";
import GifList from "../components/GifList/GifList";

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
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
      <div>
        <h2>Última búsqueda</h2>
        {loading ? <Loader /> : <GifList gifs={gifs} />}
      </div>
    </>
  );
}
