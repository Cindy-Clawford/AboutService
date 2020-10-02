import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AmenitiesContainer = styled.div`
  padding: 12px 0;
`

const Amenities = (props) => {
  var amenitiesIcons = {
    valet_parking: "https://img.icons8.com/material-outlined/24/000000/parking.png",
    pool: "https://img.icons8.com/ios-filled/50/000000/lap-pool.png",
    free_breakfast: "https://img.icons8.com/windows/32/000000/travel-mug.png",
    beach: "https://img.icons8.com/metro/26/000000/beach.png",
    babysitting: "https://img.icons8.com/fluent-systems-filled/24/000000/men-age-group-1.png",
    free_internet: "https://img.icons8.com/fluent-systems-regular/24/000000/internet.png",
    fitness_center: "https://img.icons8.com/metro/26/000000/bench-press-with-dumbbells.png",
    entertainment: "https://img.icons8.com/windows/32/000000/cinema-ticket.png",
    business_center: "https://img.icons8.com/fluent-systems-filled/24/000000/business.png",
    spa: "https://img.icons8.com/windows/32/000000/spa-care.png",
  }
  var amenities = [];
  var property_amenitiesValues = Object.values(props.hotel.property_amenities);
  var property_amenitiesKeys = Object.keys(props.hotel.property_amenities);

  for (var i = 0; i < property_amenitiesKeys.length; i++) {
    if (property_amenitiesValues[i]) {
    amenities.push(property_amenitiesKeys[i]);
    }
  };

  return (
    <AmenitiesContainer>
      <h3>Property amenities</h3>
      <ul style={{columns: 2, listStyleType: "none", padding: "0px"}}>
        {amenities.map((amenity, index) => <li key={index} style={{padding: "7px"}}><img src={amenitiesIcons[amenity]} height="20px" width="20px"></img>  {amenity}</li>)}
      </ul>
    </AmenitiesContainer>
  )
}

export default Amenities;