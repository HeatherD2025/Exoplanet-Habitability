import { useState, useEffect, useCallback } from "react";
import type { Planet } from "../types/planet";

export default function usePlanets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const BATCH_SIZE = 75;

  const fetchBatch = useCallback(async (skipCount: number) => {
    const isInitial = skipCount === 0;
    if (isInitial) setLoading(true);
    else setLoadingMore(true);

    try {
      const response = await fetch(
        `/api/planets?skip=${skipCount}&take=${BATCH_SIZE}`,
      );
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      const data: Planet[] = await response.json();

      setPlanets((prev) => (isInitial ? data : [...prev, ...data]));
      if (data.length < BATCH_SIZE) setHasMore(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fetch error");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchBatch(0);
  }, [fetchBatch]);

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      fetchBatch(planets.length);
    }
  };

  return { planets, loading, loadingMore, error, hasMore, loadMore };
}
