import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader/Loader";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Loader />
      </>
    );
  if (isError) return <Redirect to="404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h1 className="App-title">{gif.title}</h1>
      <Gif {...gif} />
    </>
  );
}
