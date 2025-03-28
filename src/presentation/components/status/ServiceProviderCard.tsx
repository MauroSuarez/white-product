"use client";

import { MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Typography } from "@/presentation/ds/typography";

interface ServiceProvider {
  name: string;
  rating: number;
  address: string;
  phone: string;
  image: string;
}

interface Technician {
  name: string;
  speciality: string;
  image: string;
}

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  technician: Technician;
}

export function ServiceProviderCard({
  provider,
  technician
}: ServiceProviderCardProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={provider.image || "/placeholder.svg"}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Typography variant="p" className="font-medium">
            {provider.name}
          </Typography>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < Math.floor(provider.rating)
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <Typography variant="small" className="text-muted-foreground">
              {provider.rating}
            </Typography>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
          <Typography variant="small" className="text-muted-foreground">
            {provider.address}
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          <Typography variant="small" className="text-muted-foreground">
            {provider.phone}
          </Typography>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="small" className="text-muted-foreground">
          Técnico asignado
        </Typography>
        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
            <img
              src={technician.image || "/placeholder.svg"}
              alt={technician.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Typography variant="p" className="font-medium">
              {technician.name}
            </Typography>
            <Typography variant="small" className="text-muted-foreground">
              {technician.speciality}
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <Button
          variant="outline"
          className="flex-1 gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Phone className="h-4 w-4" />
          Llamar
        </Button>
        <Button
          variant="outline"
          className="flex-1 gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <MessageSquare className="h-4 w-4" />
          Mensaje
        </Button>
      </div>
    </>
  );
}
