import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function Page404() {
  const page404Gif =
    "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif";

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <div className="page-404">
        <h1>404</h1>
        <p>Ups... page not found</p>
        <img src={page404Gif} alt="Not found GIF" />
        <Link className="btn" href="/">
          Take me home
        </Link>
      </div>
    </>
  );
}
