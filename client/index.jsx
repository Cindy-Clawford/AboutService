import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Amenities from './components/Amenities.jsx';
import sampleData from '../sampleData.js';

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
        <h2 className="property-amenities">Property amenities</h2>
        <Amenities hotel={this.state.hotel}/>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<AboutApp />, document.getElementById('aboutApp'))