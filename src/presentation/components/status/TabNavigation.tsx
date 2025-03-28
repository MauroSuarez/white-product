"use client";

import type { ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange
}: TabNavigationProps) {
  return (
    <div className="flex overflow-x-auto scrollbar-hide mb-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-1 shadow-inner">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 rounded-md transition-colors ${
            activeTab === tab.id
              ? "bg-primary text-white shadow-sm"
              : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
