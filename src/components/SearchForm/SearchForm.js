import React, { useState } from "react";
import { useLocation } from "wouter";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Buscar gifs..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default React.memo(SearchForm);
