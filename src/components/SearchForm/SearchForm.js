import React, { useState, useReducer } from "react";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const ACTION_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTION_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0] }) {
  const [, pushLocation] = useLocation();

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, times, rating } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });
  };

  const handleChangeRating = (e) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value });
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
      <p>{times}</p>
    </form>
  );
}

export default React.memo(SearchForm);
