export interface Location {
  lat: number;
  lng: number;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: Location;
}

export interface HotelState {
  hoveredHotelId: string | null;
  selectedHotelId: string | null;
  visibleHotels: Hotel[];
  setHoveredHotel: (id: string | null) => void;
  setSelectedHotel: (id: string | null) => void;
  setVisibleHotels: (hotels: Hotel[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
