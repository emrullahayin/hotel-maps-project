'use client';
import { Search } from 'lucide-react';
import { useHotelStore } from '@/store/useHotelStore';

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useHotelStore();

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1001] w-full max-w-[600px] px-4">
      <div className="flex items-center gap-2 p-2 bg-white/80 backdrop-blur-xl border-2 border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[2rem] transition-all focus-within:border-black focus-within:bg-white">
        <div className="pl-4">
          <Search className="w-5 h-5 text-gray-400" />
        </div>

        <input
          type="text"
          placeholder="Nereye gitmek istersiniz?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none py-3 px-2 text-[15px] font-bold text-black placeholder:text-gray-400 placeholder:font-medium"
        />

        <div className="h-8 w-[1.5px] bg-gray-100 mx-2" />

        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all active:scale-95">
          <span className="text-sm font-black hidden sm:inline">Ara</span>
          <Search className="w-4 h-4 sm:hidden" />
        </button>
      </div>
    </div>
  );
}
