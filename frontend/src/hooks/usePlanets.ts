import { useState, useEffect } from "react";
import type { Exoplanet } from "../types/planet";

export default function usePlanets() {
  const [planets, setPlanets] = useState<Exoplanet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:9999";
        const response = await fetch(`${apiUrl}/api/planets`);

        if (!response.ok) {
          throw new Error(`Error fetching exoplanets: ${response.statusText}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from the API");
        }

        setPlanets(data);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return { planets, loading, error };
}
