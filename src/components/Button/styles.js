import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

export const Link = styled(LinkWouter)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;

  :hover {
    background-color: green;
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Button = Link.withComponent("button");
