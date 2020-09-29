import React from 'react';
import ReactDom from 'react-dom';

const RoomTypes = (props) => {
  var roomTypesIcons = {
    oceanView: "https://img.icons8.com/material-sharp/24/000000/wave-lines.png",
    suite: "https://img.icons8.com/material-outlined/24/000000/bed.png",
    family_rooms: "https://img.icons8.com/material-outlined/24/000000/bed.png",
    nonsmoking_rooms: "https://img.icons8.com/fluent-systems-regular/24/000000/no-smoking.png",
  }
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
      {types.map((type, index) => <div key={index}><img src={roomTypesIcons[type]} width="20" height="20"/>{type}</div>)}
    </div>
  )
}

export default RoomTypes;