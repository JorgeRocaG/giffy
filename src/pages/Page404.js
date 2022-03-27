/** @jsxImportSource @emotion/react */
import React from "react";
import { Helmet } from "react-helmet";

import Button from "components/Button/Button";

export default function Page404() {
  const page404Gif =
    "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif";

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <div>
        <h1>404</h1>
        <p>Ups... page not found</p>
        <img src={page404Gif} alt="Not found GIF" />
        <Button href="/">Take me home</Button>
      </div>
    </>
  );
}
