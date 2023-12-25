import React from "react";
import { GeoJSON, } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const ICON = new L.Icon({
  iconUrl: "./radiation.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

export const MapElements = (props) => {
  let geoJSONDataPoint= props.geoJSONDataPoint;
  let geoJSONDataPoly= props.geoJSONDataPoly;
  const onEachSite = (site, layer) => {
    switch (layer.feature.geometry.type) {
      case "Point":
        layer.setIcon(ICON);
        layer.bindPopup(`<div>${layer.feature.properties.rnc_name + layer.feature.properties.site_name}</div>`)
        break;
      case "Polygon":
        layer.setStyle({
          color: "#333333",
          weight: 0.6,
          fillColor: "blue",
          fillOpacity: "0.2",
        });
        break;
      default:
        break;
    }
  };
  
  const createCustomClusterIcon = (cluster)=>{
    return ICON
  };
  
  return (
    <div>
      <MarkerClusterGroup iconCreateFunction={createCustomClusterIcon}>
        <GeoJSON data={geoJSONDataPoint} onEachFeature={onEachSite} />
        <GeoJSON data={geoJSONDataPoly} onEachFeature={onEachSite} />
      </MarkerClusterGroup>
    </div>
  );
};

