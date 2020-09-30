import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Amenities from './components/Amenities.jsx';
import RoomFeatures from './components/RoomFeatures.jsx';
import Ratings from './components/Ratings.jsx';
import sampleData from '../sampleData.js';
import RoomTypes from './components/RoomTypes.jsx'
import Description from './components/Description.jsx';
import OtherHotelInfo from './components/OtherHotelInfo.jsx';
import Images from './components/Images.jsx';
import styled from 'styled-components';

//Styling

const AboutContainer = styled.div`
  margin: auto;
  padding: 15px;
  border: 2px solid #D3D3D3;
  width: 850px;
  height: 1100px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 40px 300px 200px 200px 200px;
  grid-template-areas:
  "title title"
  "ratings amenities"
  "description features"
  "images room_types"
  "images otherInformation";
  column-gap: 40px;
  row-gap: 10px;
  font-family: "arial";
`
const TitleSection = styled.h2`
  grid-area: title;
  font-size: 30px;
  padding: 10px;
  border-bottom: 2px solid #D3D3D3;
`
const RatingsSection = styled.div`
  grid-area: ratings;
  padding: 10px;
  border-bottom: 2px solid #D3D3D3;
`
const DescriptionSection = styled.div`
  grid-area: description;
`
const ImagesSection = styled.div`
  grid-area: images;
`
const AmenitiesSection = styled.div`
  grid-area: amenities;
`
const FeaturesSection = styled.div`
  grid-area: features;
`
const RoomTypesSection = styled.div`
  grid-area: room_types;
`
const OtherInformationSection = styled.div`
  grid-area: otherInformation;
`

//App
class AboutApp extends React.Component {
  constructor() {
    super ();

    this.state = {
      hotel: sampleData[0]
    }
  }

  componentDidMount(){
    var hotelNumber = Math.floor(Math.random() * Math.floor(100));
    console.log(hotelNumber)
    $.ajax({
      type: 'GET',
      url: `/api/hotel/hotel ${hotelNumber}`,
      success: (result) => {
        this.setState({
          hotel: result
        })
      }
    })
  }

  render() {
    return (
      <AboutContainer>
        <TitleSection>About</TitleSection>
        <RatingsSection>
          <Ratings hotel={this.state.hotel}/>
        </RatingsSection>
        <DescriptionSection>
          <Description hotel={this.state.hotel}/>
        </DescriptionSection>
        <ImagesSection>
          <Images hotel={this.state.hotel} />
        </ImagesSection>
        <AmenitiesSection>
          <Amenities hotel={this.state.hotel}/>
        </AmenitiesSection>
        <FeaturesSection>
          <RoomFeatures hotel={this.state.hotel}/>
        </FeaturesSection>
        <RoomTypesSection>
          <RoomTypes hotel={this.state.hotel}/>
        </RoomTypesSection>
        <OtherInformationSection>
          <OtherHotelInfo hotel={this.state.hotel}/>
        </OtherInformationSection>
    </AboutContainer>
    )
  }
}

ReactDOM.render(<AboutApp />, document.getElementById('aboutApp'))