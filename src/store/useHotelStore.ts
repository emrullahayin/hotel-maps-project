import { create } from 'zustand';
import { HotelState } from '@/types';
import { hotels } from '@/lib/data';

export const useHotelStore = create<HotelState>((set) => ({
  hoveredHotelId: null,
  selectedHotelId: null,
  visibleHotels: hotels,
  setHoveredHotel: (id) => set({ hoveredHotelId: id }),
  setSelectedHotel: (id) => set({ selectedHotelId: id }),
  setVisibleHotels: (visibleHotels) => set({ visibleHotels }),
  searchQuery: '',
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
