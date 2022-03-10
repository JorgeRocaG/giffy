import React, { useState } from "react";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(RATINGS[0]);
  const [, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    setRating(e.target.value);
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
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(SearchForm);
