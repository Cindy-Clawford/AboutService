import React from 'react';
import ReactDOM from 'react-dom';

const Amenities = (props) => {
  var amenities = []; var property_amenitiesValues = Object.values(props.hotel.property_amenities);
  var property_amenitiesKeys = Object.keys(props.hotel.property_amenities);
  for (var i = 0; i < property_amenitiesKeys.length; i++) {
    if (property_amenitiesValues[i]) {
    amenities.push(property_amenitiesKeys[i])
    }
  };

  return (
    <div>
      {amenities.map((amenity, index) => <div key={index}>{amenity}</div>)}
    </div>
  )
}

export default Amenities;