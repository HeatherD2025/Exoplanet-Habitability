import { useState, useEffect, useCallback } from "react";
import type { Planet } from "../types/planet";

export default function usePlanets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const BATCH_SIZE = 200;

  const fetchPlanets = useCallback(async (isInitial: boolean = false) => {
    if (isInitial) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    setError(null);

    try {

      const currentSkip = isInitial ? 0 : planets.length;

      const response = await fetch(`/api/planets?skip=${currentSkip}&take=${BATCH_SIZE}`);
      
      if (!response.ok) {
        throw new Error(`Failed to scan the deep space archives: ${response.statusText}`);
      }

      const data: Planet[] = await response.json();

      if (isInitial) {
        setPlanets(data);
      } else {
        setPlanets((prev) => [...prev, ...data]);
      }

      if (data.length < BATCH_SIZE) {
        setHasMore(false);
      }
    } catch (err: any) {
      setError(err.message || "An interstellar communication error occurred...");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }    
  }, [planets.length]);

  useEffect(() => {
    fetchPlanets(true);
  }, []);

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      fetchPlanets(false);
    }
  };

  return { planets, loading, loadingMore, error, hasMore, loadMore };
}