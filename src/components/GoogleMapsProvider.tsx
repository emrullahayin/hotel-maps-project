'use client';
import { useJsApiLoader } from '@react-google-maps/api';
import React, { useMemo } from 'react';

const LIBRARIES: ('places' | 'geometry')[] = ['places', 'geometry'];

export default function GoogleMapsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: LIBRARIES,
  });

  if (loadError)
    return <div className="p-10 text-red-500">Google Maps Error!</div>;

  if (!isLoaded)
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="font-bold text-gray-400 tracking-widest uppercase text-xs">
            Harita Hazırlanıyor
          </p>
        </div>
      </div>
    );

  return <>{children}</>;
}
