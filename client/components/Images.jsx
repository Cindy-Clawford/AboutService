import React from 'react';

const Images = (props) => {

  return (
    <div>
      <img src={props.hotel.images[0]} width="400" height="300"/>
      <div>
        {props.hotel.images.map((image, index) => {
          return (
          <img key={index} src={image} width="50" height="50"/>
          )
        })}
      </div>
    </div>
  )
}

export default Images;