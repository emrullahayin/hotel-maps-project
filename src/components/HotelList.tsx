'use client';
import { useEffect } from 'react';
import HotelCard from './HotelCard';
import { useHotelStore } from '@/store/useHotelStore';

export default function HotelList() {
  const { visibleHotels, selectedHotelId } = useHotelStore();

  useEffect(() => {
    if (selectedHotelId) {
      const element = document.getElementById(`hotel-card-${selectedHotelId}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [selectedHotelId]);

  return (
    <div className="flex flex-col gap-6 p-4 bg-[#f8f8f8]">
      {visibleHotels.length === 0 ? (
        <div className="text-center py-20 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
          Bu bölgede kriterlere uygun otel bulunamadı
        </div>
      ) : (
        visibleHotels.map((hotel) => (
          <div
            id={`hotel-card-${hotel.id}`}
            key={hotel.id}
            className="transition-all duration-500"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))
      )}
    </div>
  );
}
