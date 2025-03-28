"use client";

import { useState } from "react";
import { Share2, Printer, FileDown, Clock } from "lucide-react";
import { Button } from "@/presentation/ds/button";

interface ActionButtonsProps {
  onPrint?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

export function ActionButtons({
  onPrint,
  onShare,
  onDownload
}: ActionButtonsProps) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      if (onPrint) {
        onPrint();
      } else {
        window.print();
      }
      setIsPrinting(false);
    }, 300);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      if (onDownload) {
        onDownload();
      }
      setIsDownloading(false);
    }, 300);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Button
        variant="outline"
        className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <>
            <Clock className="h-4 w-4 animate-spin" />
            Generando...
          </>
        ) : (
          <>
            <FileDown className="h-4 w-4" />
            Descargar PDF
          </>
        )}
      </Button>
      <Button
        variant="outline"
        className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={handlePrint}
        disabled={isPrinting}
      >
        {isPrinting ? (
          <>
            <Clock className="h-4 w-4 animate-spin" />
            Imprimiendo...
          </>
        ) : (
          <>
            <Printer className="h-4 w-4" />
            Imprimir
          </>
        )}
      </Button>
      <Button
        variant="outline"
        className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={onShare}
      >
        <Share2 className="h-4 w-4" />
        Compartir
      </Button>
    </div>
  );
}
