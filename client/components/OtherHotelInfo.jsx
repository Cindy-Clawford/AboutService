import React from 'react';
import styled from 'styled-components';

const RatingStar = styled.div`
  margin-right: 4px;
  width: 10px;
  height: 10px;
  display: inline-block;
  color: grey;
`;

const OtherHotelInfo = (props) => {

  var fillStars = (rating)=> {
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

  var classStars = fillStars(props.hotel.hotel_class);

  return (
    <div>
      <h3 >Good to know</h3>
      <h4 className="hotel-class">HOTEL CLASS </h4>
      {classStars.map((star, index) => {
        if (star === 1) {
          return (
            <RatingStar key={index}>{String.fromCharCode(9733)}</RatingStar>
          )
        } else {
          return (
            <RatingStar key={index}>{String.fromCharCode(9734)}</RatingStar>
          )
        }
      })}
      <h4 className="languages-spoken">LANGUAGES SPOKEN </h4>
      <h5> {props.hotel.languages_spoken} </h5>
      <h4 className="hotel-style">HOTEL STYLE </h4>
      <h5>{props.hotel.hotel_style}</h5>
      <h3>Hotel Links</h3>
      <h4 className="website-link" link={props.hotel.hotel_website}>Visit hotel website</h4>
    </div>
  )
}

export default OtherHotelInfo;