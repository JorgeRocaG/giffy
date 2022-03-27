import styled from "@emotion/styled";
import { Link } from "wouter";
import { breakpoints } from "styles/styles";

const generateMulticolorCategory = (props) => {
  const colors = ["--orange", "--purple", "--pink", "--yellow", "--blue"];
  return `background-color: var(${colors[props.index % 5]})`;
};

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
`;

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem 0.5rem;
  color: white;
  transition: all 0.3s ease-in-out;
  ${generateMulticolorCategory};

  :hover {
    text-decoration: underline;
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;

  ${breakpoints.desktop} {
    font-size: 1.2rem;
  }
`;
