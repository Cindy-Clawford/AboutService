import React from 'react';
import ReactDOM from 'react-dom';

const Description = (props) => {
  return (
    <div>
      {props.hotel.description}
    </div>
  )
}

export default Description;