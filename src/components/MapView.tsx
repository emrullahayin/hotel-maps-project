'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, GoogleMapProps } from '@react-google-maps/api';
import { hotels as allHotels } from '@/lib/data';
import MapMarker from './MapMarker';
import { useHotelStore } from '@/store/useHotelStore';

const TypedGoogleMap = GoogleMap as unknown as React.FC<GoogleMapProps>;

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  styles: [
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#e9e9e9' }],
    },
    { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
  ],
};

export default function MapView() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { searchQuery, setVisibleHotels, visibleHotels } = useHotelStore();

  useEffect(() => {
    const filteredBySearch = allHotels.filter((h) =>
      h.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setVisibleHotels(filteredBySearch);

    if (searchQuery.length >= 3 && filteredBySearch.length > 0) {
      map?.panTo(filteredBySearch[0].location);
      map?.setZoom(15);
    }
  }, [searchQuery, map, setVisibleHotels]);

  const onIdle = useCallback(() => {
    if (map && searchQuery === '') {
      const bounds = map.getBounds();
      if (bounds) {
        const visible = allHotels.filter((h) => bounds.contains(h.location));
        setVisibleHotels(visible);
      }
    }
  }, [map, searchQuery, setVisibleHotels]);

  return (
    <div className="h-full w-full relative">
      <TypedGoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat: 41.039, lng: 28.985 }}
        zoom={13}
        onLoad={(m) => setMap(m)}
        onIdle={onIdle}
        options={mapOptions}
      >
        {visibleHotels.map((hotel) => (
          <MapMarker key={hotel.id} hotel={hotel} />
        ))}
      </TypedGoogleMap>
    </div>
  );
}
