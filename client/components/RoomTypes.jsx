import React from 'react';
import ReactDom from 'react-dom';

const RoomTypes = (props) => {
  var types = [];
  var roomTypesValues = Object.values(props.hotel.room_types);
  var roomTypesKeys = Object.keys(props.hotel.room_types);

  for (var i = 0; i < roomTypesKeys.length; i++) {
    if (roomTypesValues[i]) {
      types.push(roomTypesKeys[i])
    }
  };

  return (
    <div>
      {types.map((type, index) => <div key={index}>{type}</div>)}
    </div>
  )
}

export default RoomTypes;