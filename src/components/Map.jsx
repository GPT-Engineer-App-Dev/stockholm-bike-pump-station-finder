import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box } from '@chakra-ui/react';

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const bikePumpStations = [
  { id: 1, name: 'Station 1', position: [59.3293, 18.0686] },
  { id: 2, name: 'Station 2', position: [59.3325, 18.0649] },
  { id: 3, name: 'Station 3', position: [59.3340, 18.0700] },
];

const Map = () => {
  return (
    <Box height="100vh" width="100%">
      <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {bikePumpStations.map(station => (
          <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;