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

class AboutApp extends React.Component {
  constructor() {
    super ();

    this.state = {
      hotel: sampleData[0]
    }
  }

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: '/api/hotel',
      success: (result) => {
        this.setState({
          hotel: result
        })
      }
    })
  }

  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
      <div>
        <h2 className="ratings">Ratings</h2>
        <Ratings hotel={this.state.hotel}/>
        <Description hotel={this.state.hotel}/>
        <Images hotel={this.state.hotel} />
        <h2 className="property-amenities">Property amenities</h2>
        <Amenities hotel={this.state.hotel}/>
        <h2 className="room-features">Room features</h2>
        <RoomFeatures hotel={this.state.hotel}/>
        <h2 className="room-types">Room types</h2>
        <RoomTypes hotel={this.state.hotel}/>
        <OtherHotelInfo hotel={this.state.hotel}/>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<AboutApp />, document.getElementById('aboutApp'))