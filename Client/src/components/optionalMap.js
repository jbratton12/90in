import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

// Array of schengenCountries
const schengenCountries = [
  { country: "Austria", latitude: 47.5162, longitude: 14.5501 },
  { country: "Belgium", latitude: 50.5039, longitude: 4.4699 },
  { country: "Czech Republic", latitude: 49.8175, longitude: 15.473 },
  { country: "Denmark", latitude: 56.2639, longitude: 9.5018 },
  { country: "Estonia", latitude: 58.5953, longitude: 25.0136 },
  { country: "Finland", latitude: 61.9241, longitude: 25.7482 },
  { country: "France", latitude: 46.2276, longitude: 2.2137 },
  { country: "Germany", latitude: 51.1657, longitude: 10.4515 },
  { country: "Greece", latitude: 37.9838, longitude: 23.7275 },
  { country: "Hungary", latitude: 47.1625, longitude: 19.5033 },
  { country: "Iceland", latitude: 65.0722, longitude: -18.8777 },
  { country: "Italy", latitude: 41.8719, longitude: 12.5674 },
  { country: "Latvia", latitude: 56.8796, longitude: 24.6032 },
  { country: "Liechtenstein", latitude: 47.166, longitude: 9.5554 },
  { country: "Lithuania", latitude: 55.1694, longitude: 23.8813 },
  { country: "Luxembourg", latitude: 49.8153, longitude: 6.1296 },
  { country: "Malta", latitude: 35.9375, longitude: 14.3754 },
  { country: "Netherlands", latitude: 52.3784, longitude: 4.9 },
  { country: "Norway", latitude: 60.472, longitude: 8.4689 },
  { country: "Poland", latitude: 51.9194, longitude: 19.1451 },
  { country: "Portugal", latitude: 39.3999, longitude: -8.2245 },
  { country: "Slovakia", latitude: 48.669, longitude: 19.699 },
  { country: "Slovenia", latitude: 46.1512, longitude: 14.9955 },
  { country: "Spain", latitude: 40.4637, longitude: -3.7492 },
  { country: "Sweden", latitude: 60.1282, longitude: 18.6435 },
  { country: "Switzerland", latitude: 46.8182, longitude: 8.2275 },
];

export default function optionalMap({ matchingTrip }) {
  const country = matchingTrip.country;
  let longitude = 0;
  let latitude = 0;

  for (const item of schengenCountries) {
    if (item.country === country) {
      longitude = item.longitude;
      latitude = item.latitude;
      break;
    }
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    </>
  );
}
