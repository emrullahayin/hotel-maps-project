'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MapPin, Star } from 'lucide-react';
import { Hotel } from '@/types';
import { useHotelStore } from '@/store/useHotelStore';
import { motion } from 'framer-motion';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const { setHoveredHotel, setSelectedHotel, hoveredHotelId, selectedHotelId } =
    useHotelStore();
  const [imgSrc, setImgSrc] = useState<string>(hotel.image);

  const isActive = hoveredHotelId === hotel.id || selectedHotelId === hotel.id;

  return (
    <motion.div
      layout
      onMouseEnter={() => setHoveredHotel(hotel.id)}
      onMouseLeave={() => setHoveredHotel(null)}
      onClick={() => setSelectedHotel(hotel.id)}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border-2 transition-all duration-500 cursor-pointer ${
        isActive
          ? 'border-black bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] -translate-y-2 scale-[1.01]'
          : 'border-gray-100 bg-white hover:border-gray-300'
      }`}
    >
      {/* Görsel Alanı */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-inherit">
        <Image
          src={imgSrc}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          className={`object-cover transition-transform duration-1000 ease-out ${
            isActive ? 'scale-110' : 'group-hover:scale-105'
          }`}
          onError={() =>
            setImgSrc(
              'https://images.unsplash.com/photo-1540518614846-7eded433c457',
            )
          }
        />

        {/* Favori Butonu - Daha şeffaf ve minimal */}
        <div className="absolute top-5 right-5 p-2 bg-white/40 backdrop-blur-md rounded-full border border-white/20 hover:bg-white transition-all">
          <Heart
            className={`w-4 h-4 transition-colors ${isActive ? 'fill-red-500 text-red-500' : 'text-black'}`}
          />
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-gray-400">
              <MapPin className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                İstanbul
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-black text-black" />
              <span className="text-[11px] font-black text-black">
                {hotel.rating}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-black text-black tracking-tight leading-tight truncate">
            {hotel.name}
          </h3>
        </div>

        {/* Fiyat ve İkon */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-black tracking-tighter">
              {hotel.price.toLocaleString('tr-TR')} TL
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Gecelik
            </span>
          </div>

          <div
            className={`flex items-center justify-center h-10 w-10 rounded-xl border-2 transition-all duration-500 ${
              isActive
                ? 'bg-black border-black rotate-90'
                : 'bg-white border-gray-100 group-hover:border-black'
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? 'white' : 'black'}
              strokeWidth="3"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
