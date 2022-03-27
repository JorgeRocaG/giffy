import React from "react";
import { useLocation } from "wouter";

import Button from "components/Button/Button";
import useForm from "./hooks";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0] }) {
  const [, pushLocation] = useLocation();

  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Buscar gifs..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <Button>Buscar</Button>
      <p>{times}</p>
    </form>
  );
}

export default React.memo(SearchForm);
