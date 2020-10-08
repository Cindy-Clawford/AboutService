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
import AmenitiesPopout from './components/AmenitiesPopout.jsx'
import styled from 'styled-components';

//Styling

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const AboutContainer = styled.div`
  padding: 24px;
  border: 2px solid #D3D3D3;
  width: 700px;
  height: 100%;
  font-family: arial;
  position: relative;
  background: white;
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

const AmenitiesPopoutContainer = styled.div`
  position: fixed;
  left: 25%;
  top: 10%;
  border: 2px solid #D3D3D3;
  width: 800px;
  background-color: white;
  font-family: arial;
  padding: 36px;
  z-index: 1001;
`

//App
class AboutApp extends React.Component {
  constructor() {
    super ();

    this.state = {
      hotel: [],
      hideBackground: false,
      amenities: false
    }

    this.handlePopoutWindow = this.handlePopoutWindow.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleShowAmenities = this.handleShowAmenities.bind(this);
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

  handlePopoutWindow(){
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    this.setState({
      hideBackground: true
    })
  }

  handleExit() {
    document.getElementsByTagName('body')[0].style.overflow = "visible";
    this.setState({
      hideBackground: false
    }, () => {
      if (this.state.amenities){
        this.setState({
          amenities: false
        })
      }
    })
  }

  handleShowAmenities(){
    this.setState({
      amenities: true
    })
  }

  render() {
    if (Array.isArray(this.state.hotel)) {
      return(
        <div></div>
      )
    }
    return (
      <div>
        <Overlay style={{display: this.state.hideBackground ? "block" : "none",}} onClick={this.handleExit}></Overlay>
        <AmenitiesPopoutContainer style={{display: this.state.amenities ? "block" : "none"}}>
          <AmenitiesPopout hotel={this.state.hotel} handleExit={this.handleExit}/>
        </AmenitiesPopoutContainer>
        <AboutContainer>
          <TitleSection>About</TitleSection>
          <ContentSection>
            <LeftSection>
              <Ratings hotel={this.state.hotel}/>
              <Description description={this.state.hotel.description} />
            <Images images={this.state.hotel.images} handlePopoutWindow={this.handlePopoutWindow} hideBackground={this.state.hideBackground}handleExit={this.handleExit}/>
          </LeftSection>
          <RightSection>
            <Amenities hotel={this.state.hotel} handlePopoutWindow={this.handlePopoutWindow} handleShowAmenities={this.handleShowAmenities}/>
            <RoomFeatures hotel={this.state.hotel} handlePopoutWindow={this.handlePopoutWindow} handleShowAmenities={this.handleShowAmenities}/>
            <RoomTypes hotel={this.state.hotel}/>
            <OtherHotelInfo hotel={this.state.hotel}/>
          </RightSection>
          </ContentSection>
      </AboutContainer>
    </div>
    )
  }
}


ReactDOM.render(<AboutApp />, document.getElementById('aboutApp'))