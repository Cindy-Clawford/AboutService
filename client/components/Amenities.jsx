import React from 'react';
import styled from 'styled-components';
import amenitiesIcons from '../icons.jsx';

const AmenitiesContainer = styled.div`
  padding: 12px 0;
`

const ShowMoreAmenities = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: bold;
  padding: 0;
  &:hover {
    border-bottom: solid 1px black
  }
`

const Amenities = (props) => {
  var amenities = [];
  var property_amenitiesValues = Object.values(props.hotel.property_amenities);
  var property_amenitiesKeys = Object.keys(props.hotel.property_amenities);

  for (var i = 0; i < property_amenitiesKeys.length; i++) {
    if (property_amenitiesValues[i]) {
    amenities.push(property_amenitiesKeys[i]);
    }
  };

  var amenitiesToShow = amenities.slice(0, 8);

  var handleAmentitiesShow = (view) => {
    props.handlePopoutWindow();
    props.handleShowAmenities(view);
  }

  return (
    <AmenitiesContainer>
      <h4 style={{margin: "22px 0 0"}}>Property amenities</h4>
      <div>
        <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
          {amenitiesToShow.map((amenity, index) => <div key={index} style={{padding: "0 0 10px", fontSize: "12px"}}><img src={amenitiesIcons[amenity]} height="12px" width="12px" style={{verticalAlign: "middle"}}></img><span>  {amenity}</span></div>)}
        </div>
        {amenities.length > 8 ? <ShowMoreAmenities onClick={() => handleAmentitiesShow('amenities')} >Show more</ShowMoreAmenities> : <div></div>}
      </div>
    </AmenitiesContainer>
  )
}

export default Amenities;