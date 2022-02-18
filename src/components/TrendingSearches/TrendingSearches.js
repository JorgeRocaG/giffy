import React, { useEffect, useState, useRef } from "react";
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
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
