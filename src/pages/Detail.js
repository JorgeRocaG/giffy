import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Loader from "components/Loader/Loader";
import { Redirect } from "wouter";
import useTitle from "hooks/useTitle";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  useTitle({ title });

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
