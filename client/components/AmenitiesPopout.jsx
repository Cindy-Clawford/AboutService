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
  z-index: 1003;
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
      viewSwitched: false
    }
  }

  componentDidUpdate(){
    if((this.props.view !== this.state.show) && (!this.state.viewSwitched)) {
      this.setState({
        show: this.props.view
      })
    }
  }

  handleView(view) {
    this.setState({
      show: view,
      viewSwitched: true
    })
  }

  handleExitClick() {
    this.props.handleExit()
    this.setState({
      viewSwitched: false
    })
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

    var clickedStyle = {
      borderBottom: "4px solid white",
      marginBottom: "-2px",
      borderTopColor: "black",
      borderTopWidth: "thick"
    }

    return (
      <div>
        <h1 style={{fontWeight: "normal"}}>Amenities</h1>
        <TitleContainer>
          <TitleSection onClick={this.handleView.bind(this, 'amenities')} style={this.state.show === 'amenities' ? clickedStyle : {}}>Property amenities</TitleSection>
          <TitleSection onClick={this.handleView.bind(this, 'features')} style={this.state.show === 'features' ? clickedStyle : {}}>Room features</TitleSection>
          <TitleSection onClick={this.handleView.bind(this, 'types')} style={this.state.show === 'types' ? clickedStyle : {}}>Room types</TitleSection>
        </TitleContainer>
        <ViewContainer>
          <div style={{display: this.state.show === 'amenities' ? "block" : "none"}}>
          {amenities.map((amenity, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[amenity]} height="12px" width="12px" style={{verticalAlign: "middle", fontSize: "12px"}}></img><span>  {amenity}</span></div>)}
          </div>
          <div style={{display: this.state.show === 'features' ? "block" : "none"}}>
            {features.map((feature, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[feature]} height="12px" width="12px" style={{verticalAlign: "middle", fontSize: "12px"}}></img><span>  {feature}</span></div>)}
          </div>
          <div style={{display: this.state.show === 'types' ? "block" : "none"}}>
            {types.map((type, index) => <div key={index} style={{padding: "10px"}}><img src={amenitiesIcons[type]} height="12px" width="12px" style={{verticalAlign: "middle", fontSize: "12px"}}></img><span>  {type}</span></div>)}
          </div>
        </ViewContainer>
        <ExitButton onClick={this.handleExitClick.bind(this)}>{String.fromCharCode(10005)}</ExitButton>
      </div>
    )
  }
}

export default AmenitiesPopout;