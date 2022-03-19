import React from "react";
import { Link } from "wouter";
import "./Gif.css";

import Fav from "components/Fav/Fav";

function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <div className="Gif-fav">
        <Fav />
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <img loading="lazy" alt={title} src={url} />
        <span>{title}</span>
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
