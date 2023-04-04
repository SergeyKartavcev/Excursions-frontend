import React from 'react';

const MapLink = ({ location, zoom }) => {
    const apiKey = 'AIzaSyAx196UzQbyq_w8nhnS0UoZ_vGYMVZ52G4';
    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${location.lat},${location.lng}&zoom=${zoom}`;
    console.log('location',location)
    console.log('zoom',zoom)
    return (
      <iframe
        title="Map of location"
        width="100%"
        height="500"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      />
    );
  };
  
  export default MapLink;
  