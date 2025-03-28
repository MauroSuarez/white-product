"use client";

import { Scan, Keyboard } from "lucide-react";

interface InputMethodSelectorProps {
  inputMethod: "scan" | "manual";
  setInputMethod: (method: "scan" | "manual") => void;
}

export function InputMethodSelector({
  inputMethod,
  setInputMethod
}: InputMethodSelectorProps) {
  return (
    <div className="flex border rounded-lg overflow-hidden mb-6 shadow-sm dark:border-gray-700">
      <button
        type="button"
        className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
          inputMethod === "scan"
            ? "bg-primary text-white"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => setInputMethod("scan")}
      >
        <Scan className="h-5 w-5" />
        Escanear
      </button>
      <button
        type="button"
        className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
          inputMethod === "manual"
            ? "bg-primary text-white"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => setInputMethod("manual")}
      >
        <Keyboard className="h-5 w-5" />
        Manual
      </button>
    </div>
  );
}
