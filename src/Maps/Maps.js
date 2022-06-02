import React from "react";
import { GoogleMap, useJsApiLoader, Marker, MarkerLabel } from "@react-google-maps/api";
import classes from "./Maps.module.css"


const containerStyle = {
  width: "80vw",
  maxWidth: "700px",
  height: "80vw",
  maxHeight: "600px",
};


const center = {
  lat: 52.137610170807214,
  lng: -0.4668517807591591,
};

function Maps() {
  /* Maps API key scoped to this website only */
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
   /* map.fitBounds(bounds); */
   map.setCenter(center)
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} clickable={false} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
