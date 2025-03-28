"use client";

import { History, Car, ArrowRight } from "lucide-react";

interface RecentSearch {
  plate: string;
  vehicle?: string;
  status?: string;
  lastUpdate?: string;
}

interface RecentSearchesProps {
  searches: RecentSearch[];
  onSelectSearch: (plate: string) => void;
}

export function RecentSearches({
  searches,
  onSelectSearch
}: RecentSearchesProps) {
  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <History className="h-5 w-5 text-primary mr-2" />
        <h2 className="text-gray-900 dark:text-white font-medium">
          Búsquedas recientes
        </h2>
      </div>

      <div>
        {searches.map((search, index) => (
          <div
            key={index}
            onClick={() => onSelectSearch(search.plate)}
            className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  {search.plate}
                  {search.vehicle && ` - ${search.vehicle}`}
                </div>
                {search.status && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Car className="h-4 w-4 mr-2 text-primary" />
                    <div className="flex items-center">
                      <span>{search.status}</span>
                      {search.lastUpdate && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{search.lastUpdate}</span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
