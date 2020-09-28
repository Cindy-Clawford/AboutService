import React from 'react';
import ReactDom from 'react-dom';

const RoomFeatures = (props) => {
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
      {features.map((feature, index) => <div key={index}>{feature}</div>)}
    </div>
  )
}

export default RoomFeatures;
