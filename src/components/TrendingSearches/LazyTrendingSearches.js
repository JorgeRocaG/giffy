import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Loader from "components/Loader/Loader";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearches() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loader />}>
        {isNearScreen ? <TrendingSearches /> : <Loader />}
      </Suspense>
    </div>
  );
}
