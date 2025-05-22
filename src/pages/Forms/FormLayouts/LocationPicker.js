import React, { useEffect, useRef } from "react";
import { Row, Col, Label, Input } from "reactstrap";

const LocationPicker = () => {
  const inputRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Slight delay ensures that refs and DOM are ready
    setTimeout(() => {
      if (window.google && inputRef.current && mapRef.current) {
        // Default coordinates for Katraj, Pune
        const katrajLatLng = { lat: 18.4498, lng: 73.8656 };

        // Initialize the map
        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          center: katrajLatLng,
          zoom: 14,
        });

        // Place default marker at Katraj
        markerRef.current = new window.google.maps.Marker({
          map: mapInstance.current,
          position: katrajLatLng,
        });

        // Setup autocomplete
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const location = place.geometry?.location;

          if (location) {
            const latLng = {
              lat: location.lat(),
              lng: location.lng(),
            };

            mapInstance.current.setCenter(latLng);
            mapInstance.current.setZoom(15);
            markerRef.current.setPosition(latLng);
          }
        });
      }
    }, 100); // delay to ensure DOM is fully rendered
  }, []);

  return (
    <Row>
      <style>
        {`#map-canvas {
           border: 1px solid #ddd;
           margin-top: 10px;
      }`}

  </style>
  <Col md={12} className="mb_20">
  <div className="form-floating mb-3">
    <Input
      type="text"
      id="locationInput"
      placeholder="स्थान शोधा"
      className="form-control"
      innerRef={inputRef}
    />
    <Label htmlFor="locationInput" className="text-capitalize">
      आपल्या शाळेचे अचूक गूगल लोकेशन निवडा <span className="text-danger">*</span>
    </Label>
  </div>

  {/* Map Container */}
  <div
    id="map-canvas"
    ref={mapRef}
    style={{ height: "350px", width: "100%", position: "relative", overflow: "hidden" }}
  ></div>

  <p style={{ marginTop: "10px" }}>
    <strong>Note -</strong> आपल्या शाळेचा पत्ता गुगल मॅपला उपलब्ध नसेल तर नकाशात अचूक पत्ता प्रेस करून सिलेक्ट करा
  </p>
</Col>

    </Row>
  );
};

export default LocationPicker;
