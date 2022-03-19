import React from "react";
import { useLocation } from "wouter";

import "./Fav.css";
import useUser from "hooks/useUser";

export default function Fav({ id }) {
  const { isLogged, fav } = useUser();
  const [, pushLocation] = useLocation();

  const handleClick = () => {
    if (!isLogged) return pushLocation("/login");
    fav({ id });
  };

  return (
    <button className="Fav" onClick={handleClick}>
      <span aria-label="Fav Gif" role="img">
        ❤️
      </span>
    </button>
  );
}
