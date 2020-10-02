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
      <div style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
        <div>
          <div className="hotel-class" style={{padding: "5px"}}>HOTEL CLASS </div>
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
          </div>
        <div>
          <div className="languages-spoken" style={{padding: "5px"}}>LANGUAGES SPOKEN </div>
          <div style={{padding: "5px"}}> {props.hotel.languages_spoken} </div>
        </div>
      </div>
      <div style={{borderBottom: "grey solid 2px", padding: "5px"}}>
        <div className="hotel-style">HOTEL STYLE </div>
        <div>{props.hotel.hotel_style}</div>
      </div>
      <div style={{padding: "5px"}}>Hotel Links</div>
      <a className="website-link" href={props.hotel.hotel_website} style={{padding: "5px", color: "black"}}>
      <img src="https://img.icons8.com/windows/32/000000/internet.png" width="20px" height="20px" /> Visit hotel website</a>
    </div>
  )
}

export default OtherHotelInfo;