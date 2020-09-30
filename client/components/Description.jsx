import React from 'react';
import ReactDOM from 'react-dom';

const Description = (props) => {
  return (
    <div>
      <div>
      {props.hotel.description}
      </div>
    </div>
  )
}

export default Description;