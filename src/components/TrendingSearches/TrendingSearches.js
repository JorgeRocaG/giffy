import React, { useEffect, useState } from "react";
import useNearScreen from "hooks/useNearScreen";
import getTrendindTerms from "services/getTrendingTerms";
import Category from "components/Category/Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendindTerms().then(setTrends);
  }, []);
  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrendingSearches() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
}
