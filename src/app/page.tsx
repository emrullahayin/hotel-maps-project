import HotelList from '@/components/HotelList';
import MapView from '@/components/MapView';
import GoogleMapsProvider from '@/components/GoogleMapsProvider';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <GoogleMapsProvider>
      <main className="flex h-screen w-full overflow-hidden bg-white">
        <section className="w-full md:w-[500px] h-full overflow-y-auto custom-scrollbar shadow-2xl z-10">
          <div className="p-8">
            <h1 className="text-3xl font-extrabold mb-8 tracking-tight">
              Konaklama
            </h1>
            <HotelList />
          </div>
        </section>

        <section className="hidden md:block flex-1 h-full relative">
          <SearchInput />
          <MapView />
        </section>
      </main>
    </GoogleMapsProvider>
  );
}

