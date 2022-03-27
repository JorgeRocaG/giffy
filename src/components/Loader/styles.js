import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const loaderKeyframes = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Loader = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const LoaderRippleWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const LoaderRipple = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: ${loaderKeyframes} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-of-type(2) {
    animation-delay: -0.5s;
  }
`;
