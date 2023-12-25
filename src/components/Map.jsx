import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Typography, Container, Paper } from "@mui/material";
import { MapElements } from "./MapElements";

const center = [10.7753,106.7006];

function Map() {
  const [geoJSONDataPoint, setGeoJSONDataPoint] = useState(null);
  const [geoJSONDataPoly, setGeoJSONDataPoly] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Mockup/data.geojson");
        const data = await response.json();
        setGeoJSONDataPoint(data);
      } catch (error) {
        console.error("Error fetching or parsing GeoJSON file:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Mockup/hochiminhcity.geojson");
        const data = await response.json();
        setGeoJSONDataPoly(data);
      } catch (error) {
        console.error("Error fetching or parsing GeoJSON file:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          SmartA
        </Typography>

        <MapContainer center={center} zoom={9} style={{ height: "800px", alignItems: "right" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {(geoJSONDataPoint && geoJSONDataPoly) && <MapElements geoJSONDataPoint={geoJSONDataPoint} geoJSONDataPoly={geoJSONDataPoly} />}
        </MapContainer>
      </Paper>
    </Container>
  );
}

export default Map;
