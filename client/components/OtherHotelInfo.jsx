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
      <h4 style={{margin: "22px 0 18px"}}>Good to know</h4>
      <div style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
        <div>
          <div className="hotel-class" style={{padding: "5px 0", fontSize: "14px"}}>HOTEL CLASS </div>
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
          <div className="languages-spoken" style={{padding: "5px", fontSize: "14px"}}>LANGUAGES SPOKEN </div>
          <div style={{padding: "5px", fontSize: "12px"}}> {props.hotel.languages_spoken} </div>
        </div>
      </div>
      <div style={{borderBottom: "#D3D3D3 solid 2px", padding: "5px 0 10px", margin: "0 0 12px"}}>
        <div className="hotel-style" style={{padding: "5px 0", fontSize: "14px"}}>HOTEL STYLE </div>
        <div style={{padding: "5px 0", fontSize: "12px"}}>{props.hotel.hotel_style}</div>
      </div>
      <div style={{padding: "5px 0"}}>Hotel Links</div>
      <a className="website-link" href={props.hotel.hotel_website} style={{padding: "5px 0", color: "black", textDecoration: "none"}}>
      <img src="https://img.icons8.com/fluent-systems-regular/24/000000/internet.png" width="15px" height="15px" style={{verticalAlign: "middle"}} /> Visit hotel website</a>
    </div>
  )
}

export default OtherHotelInfo;