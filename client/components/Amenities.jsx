import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AmenitiesContainer = styled.div`
  padding: 12px 0;
`

const ShowMoreAmenities = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: bold;
  padding: 0;
  &:hover {
    border-bottom: solid 1px black
  }
`

const Amenities = (props) => {
  var amenitiesIcons = {
    "Valet parking": "https://img.icons8.com/material-outlined/24/000000/parking.png",
    "Pool": "https://img.icons8.com/ios-filled/50/000000/lap-pool.png",
    "Free breakfast": "https://img.icons8.com/windows/32/000000/travel-mug.png",
    "Beach": "https://img.icons8.com/metro/26/000000/beach.png",
    "Babysitting": "https://img.icons8.com/fluent-systems-filled/24/000000/men-age-group-1.png",
    "Free internet": "https://img.icons8.com/fluent-systems-regular/24/000000/internet.png",
    "Fitness center": "https://img.icons8.com/metro/26/000000/bench-press-with-dumbbells.png",
    "Entertainment": "https://img.icons8.com/windows/32/000000/cinema-ticket.png",
    "Business center": "https://img.icons8.com/fluent-systems-filled/24/000000/business.png",
    "Spa": "https://img.icons8.com/windows/32/000000/spa-care.png",
    "Diving": "https://img.icons8.com/ios-glyphs/30/000000/diving.png",
    "Wifi": "https://img.icons8.com/material/24/000000/wireless-cloud-access.png",
    "Hot tub": "https://img.icons8.com/ios-filled/50/000000/lap-pool.png",
    "Kids club": "https://img.icons8.com/metro/26/000000/children.png",
    "Fishing": "https://img.icons8.com/ios-glyphs/30/000000/fish.png",
    "Airport transportation": "https://img.icons8.com/fluent-systems-filled/24/000000/airplane-take-off.png",
    "Banquet room": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Couples massage": "https://img.icons8.com/windows/32/000000/spa-care.png",
    "Taxi service": "https://img.icons8.com/metro/26/000000/taxi.png",
    "Steam room": "https://img.icons8.com/windows/32/000000/spa-care.png",
    "Salon": "https://img.icons8.com/windows/32/000000/spa-care.png",
    "Gift shop": "https://img.icons8.com/fluent-systems-regular/24/000000/gift.png",
    "ATM on site": "https://img.icons8.com/android/24/000000/us-dollar.png",
    "Dry cleaning": "https://img.icons8.com/fluent-systems-regular/24/000000/hanger.png",
    "24-hour front desk": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Karaoke": "https://img.icons8.com/windows/32/000000/cinema-ticket.png",
    "Aerobics": "https://img.icons8.com/metro/26/000000/bench-press-with-dumbbells.png",
    "Swimup bar": "https://img.icons8.com/android/24/000000/cocktail.png",
    "Snack bar": "https://img.icons8.com/material-outlined/24/000000/french-fries.png",
    "Meeting rooms": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Tennis courts": "https://img.icons8.com/metro/26/000000/bench-press-with-dumbbells.png",
    "Free parking": "https://img.icons8.com/material-outlined/24/000000/parking.png",
    "Breakfast buffet": "https://img.icons8.com/windows/32/000000/travel-mug.png",
    "Shuttle bus service": "https://img.icons8.com/fluent-systems-filled/24/000000/bus.png",
    "24-hour security": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Concierge": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Currency exchange": "https://img.icons8.com/android/24/000000/us-dollar.png",
    "Non-smoking hotel": "https://img.icons8.com/fluent-systems-regular/24/000000/no-smoking.png",
    "Sun loungers/beach chairs": "https://img.icons8.com/metro/26/000000/beach.png",
    "Doorperson": "https://img.icons8.com/metro/26/000000/front-desk.png",
    "Shops": "https://img.icons8.com/fluent-systems-regular/24/000000/gift.png"
  }
  var amenities = [];
  var property_amenitiesValues = Object.values(props.hotel.property_amenities);
  var property_amenitiesKeys = Object.keys(props.hotel.property_amenities);

  for (var i = 0; i < property_amenitiesKeys.length; i++) {
    if (property_amenitiesValues[i]) {
    amenities.push(property_amenitiesKeys[i]);
    }
  };

  var amenitiesToShow = amenities.slice(0, 8);

  return (
    <AmenitiesContainer>
      <h4 style={{margin: "22px 0 0"}}>Property amenities</h4>
      <div>
        <div style={{columns: 2, listStyleType: "none", padding: "0px", margin: "10px 0"}}>
          {amenitiesToShow.map((amenity, index) => <div key={index} style={{padding: "0 0 10px"}}><img src={amenitiesIcons[amenity]} height="15px" width="15px" style={{verticalAlign: "middle"}}></img><span>  {amenity}</span></div>)}
        </div>
        {amenities.length > 8 ? <ShowMoreAmenities>Show more</ShowMoreAmenities> : <div></div>}
      </div>
    </AmenitiesContainer>
  )
}

export default Amenities;