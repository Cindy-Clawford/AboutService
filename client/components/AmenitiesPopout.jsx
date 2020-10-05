import React from 'react';
import styled from 'styled-components';
import amenitiesIcons from '../icons.jsx';

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 140px 140px;
  width: 50%;
`

const TitleSection = styled.div`
  border: 2px solid #D3D3D3;
  padding: 12px;
  text-align: center;
  border-bottom: none;
`

const ViewContainer = styled.div`
  border: 2px solid #D3D3D3;
  padding: 12px;
  columns: 2;
  position: relative;
`
const ExitButton = styled.button`
  position: absolute;
  background: none;
  outline: none;
  color: black;
  right: 0;
  top: 0;
  font-size: 50px;
  z-index: 6;
  border: none;
`

class AmenitiesPopout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 'amenities',
      popout: true,
    }
  }

  handleView(view) {
    this.setState({
      show: view
    })
  }

  handleExitClick() {
    this.props.handleAmenitiesExit()
  }

  render () {
    var amenities = [];
    var property_amenitiesValues = Object.values(this.props.hotel.property_amenities);
    var property_amenitiesKeys = Object.keys(this.props.hotel.property_amenities);

    for (var i = 0; i < property_amenitiesKeys.length; i++) {
      if (property_amenitiesValues[i]) {
      amenities.push(property_amenitiesKeys[i]);
      }
    };

    var features = [];
    var roomFeatureValues = Object.values(this.props.hotel.room_features);
    var roomFeatureKeys = Object.keys(this.props.hotel.room_features);

    for (var i = 0; i < roomFeatureKeys.length; i++) {
      if (roomFeatureValues[i]) {
        features.push(roomFeatureKeys[i])
      }
    };

    var types = [];
    var roomTypesValues = Object.values(this.props.hotel.room_types);
    var roomTypesKeys = Object.keys(this.props.hotel.room_types);

    for (var i = 0; i < roomTypesKeys.length; i++) {
      if (roomTypesValues[i]) {
        types.push(roomTypesKeys[i])
      }
    };

    return (
      <div>
        <h1 style={{fontWeight: "normal"}}>Amenities</h1>
        <TitleContainer>
          <TitleSection onClick={this.handleView.bind(this, 'amenities')}>Property amenities</TitleSection>
          <TitleSection onClick={this.handleView.bind(this, 'features')}>Room features</TitleSection>
          <TitleSection onClick={this.handleView.bind(this, 'types')}>Room types</TitleSection>
        </TitleContainer>
        <ViewContainer>
          <div style={{display: this.state.show === 'amenities' ? "block" : "none"}}>
          {amenities.map((amenity, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[amenity]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {amenity}</span></div>)}
          </div>
          <div style={{display: this.state.show === 'features' ? "block" : "none"}}>
            {features.map((feature, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[feature]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {feature}</span></div>)}
          </div>
          <div style={{display: this.state.show === 'types' ? "block" : "none"}}>
            {types.map((type, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[type]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {type}</span></div>)}
          </div>
        </ViewContainer>
        <ExitButton onClick={this.handleExitClick.bind(this)}>{String.fromCharCode(10005)}</ExitButton>
      </div>
    )
  }
}

export default AmenitiesPopout;