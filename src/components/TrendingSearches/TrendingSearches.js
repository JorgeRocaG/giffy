import React, { useEffect, useState } from "react";
import getTrendindTerms from "../../services/getTrendingTerms";
import Category from "../Category/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendindTerms().then(setTrends);
  }, []);
  return <Category name="Tendencias" options={trends} />;
}
