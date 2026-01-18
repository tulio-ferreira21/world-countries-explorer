import { MapContainer, TileLayer } from 'react-leaflet';

export default function CountryMap({ country }) {
  if (!country?.latlng) {
    return <p>Mapa não disponível</p>;
  }

  return (
    <MapContainer
      center={country.latlng}
      zoom={5}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export function WorldMap() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={0}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
} 