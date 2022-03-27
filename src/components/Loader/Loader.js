import React from "react";
import { Loader, LoaderRippleWrapper, LoaderRipple } from "./styles";

export default function LoaderComponent() {
  return (
    <Loader>
      <LoaderRippleWrapper>
        <LoaderRipple></LoaderRipple>
        <LoaderRipple></LoaderRipple>
      </LoaderRippleWrapper>
    </Loader>
  );
}
