import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className="Gif-link">
      <img loading="lazy" alt={title} src={url} />
      <span>{title}</span>
    </Link>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
