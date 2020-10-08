import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//Styling
const RatingContainer = styled.div`
  padding: 10px 0 20px;
  border-bottom: solid 2px #D3D3D3;
`

const RatingNumber = styled.span`
  font-weight: bolder;
  font-size: 50px;
  margin: 0 2px 0 0;
`

const OverallSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 3px;
`

const RatingCircle = styled.div`
  margin-right: 4px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: solid 2px #00B48B;
  display: inline-block;
`

const Ratings = (props) => {
  var overall = props.hotel.overall_rating
  var ratingGuide = '';
  if (overall > 4) {
    ratingGuide = 'Excellent';
  } else if (overall > 3 && overall <= 4) {
    ratingGuide = 'Very Good';
  } else if (overall > 2 && overall <= 3) {
    ratingGuide = 'Average';
  } else if (overall > 1 && overall <= 2) {
    ratingGuide = 'Poor';
  } else {
    ratingGuide = 'Terrible';
  }

  var reviewAmount = props.hotel.number_of_reviews.toLocaleString();

  var fillCircles = (rating)=> {
    var array = [];
    var index = 0;

    while (index < 5){
        if (rating < 1 && rating >= 0){
            rating = Math.round(10*rating)/10;
            array[index] = rating;
        } else if (rating <= 0){
            array[index] = 0
        } else {
            array[index] = 1;
        }
        rating--;
        index++;
    }
    return array;
  }

    var overallCircles = fillCircles(props.hotel.overall_rating);
    var locationCircles = fillCircles(props.hotel.location_rating);
    var cleanlinessCircles = fillCircles(props.hotel.cleanliness_rating);
    var serviceCircles = fillCircles(props.hotel.service_rating);
    var valueCircles = fillCircles(props.hotel.value_rating);

  var renderCircles = (circleType) =>{
    return circleType.map((circle, index) => {
      var greenCircle = circle * 100;
      var whiteCircle = 100 - greenCircle -2;
      if (greenCircle === 0) {
        return (
          <RatingCircle key={index} style={{background: `white`}} ></RatingCircle>)
      }
      return (
      <RatingCircle key={index} style={{background: `linear-gradient(90deg, #00B48B ${greenCircle}%, white 2%, white ${whiteCircle}%)`}} ></RatingCircle>)
    })
  }

  return (
    <RatingContainer>
      <OverallSection>
        <RatingNumber>{props.hotel.overall_rating}</RatingNumber>
        <div>
          <div className="rating_guide" style={{padding: "0.7em 0 0.1em", fontWeight: "bold"}}>{ratingGuide}</div>
          <div className="number_of_reviews" style={{"fontSize": "13px", "color": "#808080", "textAlign": "left"}}>{renderCircles(overallCircles)}{reviewAmount} reviews</div>
        </div>
      </OverallSection>

      <div className="rank" style={{clear: "both", "fontSize": "13px", "color": "#808080", "padding": "10px 2px"}}>#{props.hotel.rank} of 100 hotels in Cancun</div>
      <div className="location_rating">
      {renderCircles(locationCircles)} Location</div>
      <div className="cleanliness_rating">
      {renderCircles(cleanlinessCircles)} Cleanliness</div>
      <div className="service_rating">
      {renderCircles(serviceCircles)} Service </div>
      <div className="value_rating">
      {renderCircles(valueCircles)}  Value</div>
    </RatingContainer>
  )
}

export default Ratings;