import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import amenitiesIcons from '../icons.jsx';

const FeaturesContainer = styled.div`
  padding: 12px 0;
`

const ShowMoreFeatures = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: bold;
  padding: 0;
  &:hover {
    border-bottom: solid 1px black
  }
`

const RoomFeatures = (props) => {

  var features = [];
  var roomFeatureValues = Object.values(props.hotel.room_features);
  var roomFeatureKeys = Object.keys(props.hotel.room_features);

  for (var i = 0; i < roomFeatureKeys.length; i++) {
    if (roomFeatureValues[i]) {
      features.push(roomFeatureKeys[i])
    }
  };

  var featuresToShow = features.slice(0, 6);

  var handleAmentitiesShow = (view) => {
    props.handlePopoutWindow();
    props.handleShowAmenities(view);
  }

  return (
    <FeaturesContainer>
      <h4 style={{margin: "22px 0 0"}}>Room features</h4>
      <div>
        <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
        {featuresToShow.map((feature, index) => <div key={index} style={{padding: "0 0 10px", fontSize: "12px"}}><img src={amenitiesIcons[feature]} height="12px" width="12px" style={{verticalAlign: "middle"}}></img><span>  {feature}</span></div>)}
      </div>
      {features.length > 6 ? <ShowMoreFeatures onClick={() => handleAmentitiesShow('features')}>Show more</ShowMoreFeatures> : <div></div>}
      </div>
    </FeaturesContainer>
  )
}

export default RoomFeatures;
