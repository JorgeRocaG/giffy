import React from "react";
import { CategoryList, CategoryListItem, CategoryLink } from "./styles";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3>{decodeURI(name)}</h3>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryLink
              className="Category-link"
              to={`/search/${singleOption}`}
            >
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}
