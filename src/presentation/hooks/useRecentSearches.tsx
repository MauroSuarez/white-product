"use client";

import { useState, useEffect } from "react";

export interface RecentSearch {
  plate: string;
  vehicle?: string;
  status?: string;
  lastUpdate?: string;
}

export function useRecentSearches(storageKey = "recentSearches", maxItems = 3) {
  const [searches, setSearches] = useState<RecentSearch[]>([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem(storageKey);
    if (savedSearches) {
      try {
        setSearches(JSON.parse(savedSearches));
      } catch (e) {
        console.error("Error parsing saved searches", e);
        setSearches([]);
      }
    }
  }, [storageKey]);

  const addSearch = (search: RecentSearch) => {
    const updatedSearches = [
      search,
      ...searches.filter((s) => s.plate !== search.plate)
    ].slice(0, maxItems);

    setSearches(updatedSearches);
    localStorage.setItem(storageKey, JSON.stringify(updatedSearches));
  };

  return { searches, addSearch };
}
