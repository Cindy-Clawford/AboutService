import React from 'react';
import ReactDom from 'react-dom';

const RoomFeatures = (props) => {
  var featuresIcons = {
    air_conditioning: "https://img.icons8.com/windows/32/000000/snowflake.png",
    room_service: "https://img.icons8.com/windows/32/000000/room-service.png",
    flatscreen_TV: "https://img.icons8.com/material-outlined/24/000000/tv-show.png",
    safe: "https://img.icons8.com/fluent-systems-regular/24/000000/safe-in.png",
    wake_up_service: "https://img.icons8.com/material-outlined/24/000000/bed.png",
    housekeeping: "https://img.icons8.com/material-outlined/24/000000/bed.png",
    iron: "https://img.icons8.com/material-outlined/24/000000/bed.png",
    balcony: "https://img.icons8.com/material-outlined/24/000000/bed.png",
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
    <div>
      {features.map((feature, index) => <div key={index}><img src={featuresIcons[feature]} width="20" height="20"/>{feature}</div>)}
    </div>
  )
}

export default RoomFeatures;
