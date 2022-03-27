import styled from "@emotion/styled";
import { Link as LinkWouter } from "wouter";

export const Gif = styled.div`
  position: relative;
`;

export const GifFav = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
`;

export const GifLink = styled(LinkWouter)`
  display: block;
  position: relative;
`;

export const GifTitle = styled.span`
  position: absolute;
  font-size: 0.875rem;
  top: 0;
  left: 0;
`;

export const GifImage = styled.img`
  width: 100%;
`;
