import { useState, useEffect } from "react";
import Category from "components/Category/Category";
import getTrendindTerms from "services/getTrendingTerms";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendindTerms().then(setTrends);
  }, []);
  return <Category name="Tendencias" options={trends} />;
}
