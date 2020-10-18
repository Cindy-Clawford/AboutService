import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import amenitiesIcons from '../icons.jsx';

const TypesContainer = styled.div`
  padding: 12px 0;
`

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
    <TypesContainer>
      <h4 style={{margin: "22px 0 0"}}>Room types</h4>
      <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
        {types.map((type, index) => <div key={index} style={{padding: "0 0 10px", fontSize: "12px"}}><img src={amenitiesIcons[type]} height="12px" width="12px" style={{verticalAlign: "middle"}}></img><span>  {type}</span></div>)}
      </div>
    </TypesContainer>
  )
}

export default RoomTypes;