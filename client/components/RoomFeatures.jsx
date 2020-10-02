import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 12px 0;
`

const RoomFeatures = (props) => {
  var featuresIcons = {
    "Air conditioning": "https://img.icons8.com/windows/32/000000/snowflake.png",
    "Room service": "https://img.icons8.com/windows/32/000000/room-service.png",
    "Flatscreen TV": "https://img.icons8.com/material-outlined/24/000000/tv-show.png",
    "Safe": "https://img.icons8.com/fluent-systems-regular/24/000000/safe-in.png",
    "Wake-up service": "https://img.icons8.com/material-outlined/24/000000/bed.png",
    "Housekeeping": "https://img.icons8.com/material-outlined/24/000000/bed.png",
    "Iron": "https://img.icons8.com/material-outlined/24/000000/bed.png",
    "Balcony": "https://img.icons8.com/material-outlined/24/000000/bed.png",
  }
  var features = [];
  var roomFeatureValues = Object.values(props.hotel.room_features);
  var roomFeatureKeys = Object.keys(props.hotel.room_features);

  for (var i = 0; i < roomFeatureKeys.length; i++) {
    if (roomFeatureValues[i]) {
      features.push(roomFeatureKeys[i])
    }
  };

  return (
    <FeaturesContainer>
      <h4 style={{margin: "22px 0 0"}}>Room features</h4>
      <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
      {features.map((feature, index) => <div key={index} style={{padding: "0 0 10px"}}><img src={featuresIcons[feature]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {feature}</span></div>)}
      </div>
    </FeaturesContainer>
  )
}

export default RoomFeatures;
