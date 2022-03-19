import React from "react";
import { useLocation } from "wouter";

import "./Fav.css";
import useUser from "hooks/useUser";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [, pushLocation] = useLocation();

  const isFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return pushLocation("/login");
    addFav({ id });
  };

  const [label, emoji] = isFaved
    ? ["Remove gif from favorites", "💔"]
    : ["Add gif to favorites", "❤️"];

  return (
    <button className="Fav" onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
