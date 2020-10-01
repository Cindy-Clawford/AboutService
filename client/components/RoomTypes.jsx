import React from 'react';
import ReactDom from 'react-dom';

const RoomTypes = (props) => {
  var roomTypesIcons = {
    oceanView: "https://img.icons8.com/material-sharp/24/000000/wave-lines.png",
    suites: "https://img.icons8.com/material-outlined/24/000000/bed.png",
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
      <h3>Room types</h3>
      <ul style={{columns: 2, listStyleType: "none", padding: "0px"}}>
        {types.map((type, index) => <li key={index} style={{padding: "7px"}}><img src={roomTypesIcons[type]} height="20px" width="20px"></img>  {type}</li>)}
      </ul>
    </div>
  )
}

export default RoomTypes;