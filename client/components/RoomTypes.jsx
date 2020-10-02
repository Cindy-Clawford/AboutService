import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const TypesContainer = styled.div`
  padding: 12px 0;
`

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
    <TypesContainer>
      <h4 style={{margin: "22px 0 0"}}>Room types</h4>
      <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
        {types.map((type, index) => <div key={index} style={{padding: "0 0 10px"}}><img src={roomTypesIcons[type]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {type}</span></div>)}
      </div>
    </TypesContainer>
  )
}

export default RoomTypes;