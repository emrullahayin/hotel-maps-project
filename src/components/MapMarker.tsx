'use client';
import React from 'react';
import { OverlayView, OverlayViewProps } from '@react-google-maps/api';
import { Hotel } from '@/types';
import { useHotelStore } from '@/store/useHotelStore';

const TypedOverlayView = OverlayView as unknown as React.FC<OverlayViewProps>;

export default function MapMarker({ hotel }: { hotel: Hotel }) {
  const { hoveredHotelId, setHoveredHotel, selectedHotelId, setSelectedHotel } =
    useHotelStore();
  const isActive = hoveredHotelId === hotel.id || selectedHotelId === hotel.id;

  return (
    <TypedOverlayView
      position={hotel.location}
      mapPaneName="overlayMouseTarget"
    >
      <div
        className={`flex flex-col items-center absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-all duration-300 ${
          isActive ? 'z-[1000] scale-110' : 'z-10'
        }`}
        onMouseEnter={() => setHoveredHotel(hotel.id)}
        onMouseLeave={() => setHoveredHotel(null)}
        onClick={() => setSelectedHotel(hotel.id)}
      >
        <div
          className={`px-3 py-1.5 rounded-xl font-black text-[13px] shadow-2xl border-[1.5px] transition-all whitespace-nowrap
          ${isActive ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200 hover:border-black'}`}
        >
          {hotel.price.toLocaleString('tr-TR')} TL
        </div>
        <div
          className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] -mt-[1px] transition-colors
          ${isActive ? 'border-t-black' : 'border-t-white'}`}
        />
      </div>
    </TypedOverlayView>
  );
}
