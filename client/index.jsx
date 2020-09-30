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

`
const TitleSection = styled.h1`
  grid-area: title;
  font-size: 20px;
`
const ComponentTitle = styled.h2`
  font-size: 15px;
`
const RatingsSection = styled.div`
  grid-area: ratings;
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
        {/* <ComponentTitle>Property amenities</ComponentTitle> */}
          <Amenities hotel={this.state.hotel}/>
        </AmenitiesSection>
        {/* <ComponentTitle>Room features</ComponentTitle> */}
        <FeaturesSection>
          <RoomFeatures hotel={this.state.hotel}/>
        </FeaturesSection>
        {/* <ComponentTitle>Room types</ComponentTitle> */}
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