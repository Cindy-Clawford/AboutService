import React from 'react';
import ReactDOM from 'react-dom';

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

  return (
    <div>
      <h1 className="overall_rating">{props.hotel.overall_rating}</h1>
      <h2 className="rating_guide">{ratingGuide}</h2>
      <h3 className="number_of_reviews">{reviewAmount} reviews</h3>
      <h3 className="rank">#{props.hotel.rank} of 100 hotels in Cancun</h3>
      <h3 className="location_rating">{props.hotel.location_rating} Location</h3>
      <h3 className="cleanliness_rating">{props.hotel.cleanliness_rating} Cleanliness</h3>
      <h3 className="service_rating">{props.hotel.service_rating} Service </h3>
      <h3 className="value_rating">{props.hotel.value_rating} Value</h3>
    </div>
  )
}

export default Ratings;