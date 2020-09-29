import React from 'react';

const OtherHotelInfo = (props) => {
  return (
    <div>
      <h3 >Good to know</h3>
      <h4 className="hotel-class">HOTEL CLASS </h4>
      <h5> {props.hotel.hotel_class}</h5>
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