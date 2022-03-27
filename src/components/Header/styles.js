import styled from "@emotion/styled";
import { Link as LinkWouter } from "wouter";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const HeaderLink = styled(LinkWouter)`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
