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
  padding: 24px;
  border: 2px solid #D3D3D3;
  width: 900px;
  height: 100%;
  font-family: "arial";
  position: relative;
`
const TitleSection = styled.h2`
    font-size: 28px;
    padding: 18px;
    margin: 0;
    border-bottom: solid 2px #D3D3D3;
`

const ContentSection = styled.div`
    align-items: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
`

const LeftSection = styled.div`
  display: grid;
  grid-auto-rows: auto;
  padding: 12px;
`
const RightSection = styled.div`
  display: grid;
  padding: 12px;
`

//App
class AboutApp extends React.Component {
  constructor() {
    super ();

    this.state = {
      hotel: [],
    }
  }

  componentDidMount(){
    var hotelNumber = Math.floor(Math.random() * Math.floor(100));
    console.log(hotelNumber)
    $.ajax({
      type: 'GET',
      url: `/api/hotel/hotel${hotelNumber}`,
      success: (result) => {
        this.setState({
          hotel: result
        })
      }
    })
  }

  render() {
    if (Array.isArray(this.state.hotel)) {
      return(
        <div></div>
      )
    }
    return (
      <AboutContainer>
        <TitleSection>About</TitleSection>
        <ContentSection>
          <LeftSection>
            <Ratings hotel={this.state.hotel}/>
            <Description description={this.state.hotel.description} />
          <Images images={this.state.hotel.images}/>
        </LeftSection>
        <RightSection>
          <Amenities hotel={this.state.hotel}/>
          <RoomFeatures hotel={this.state.hotel}/>
          <RoomTypes hotel={this.state.hotel}/>
          <OtherHotelInfo hotel={this.state.hotel}/>
        </RightSection>
        </ContentSection>
    </AboutContainer>
    )
  }
}


ReactDOM.render(<AboutApp />, document.getElementById('aboutApp'))