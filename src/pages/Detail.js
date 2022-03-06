import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader/Loader";
import { Redirect } from "wouter";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Loader />;
  if (isError) return <Redirect to="404" />;
  if (!gif) return null;

  return (
    <>
      <h1 className="App-title">{gif.title}</h1>
      <Gif {...gif} />
    </>
  );
}
