import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  margin: 5px 0;
`

const LargeImageContainer = styled.div`
  position: absolute;
  width: 415px;
`
const LargeImage = styled.img`
  width: 100%;
  height: auto;
`
const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 2px;
`

const ThumbnailPhoto = styled.img`
  filter: grayscale(75%);
`

const FullViewButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
`
const Images = (props) => {

  return (
    <ImagesContainer>
      <LargeImageContainer>
        <LargeImage src={props.hotel.images[0]}/>
        <FullViewButton>Full View</FullViewButton>
      </LargeImageContainer>
      <ThumbnailContainer>
        {props.hotel.images.map((image, index) => {
          return (
          <ThumbnailPhoto key={index} src={image} width="50" height="50"/>
          )
        })}
      </ThumbnailContainer>
    </ImagesContainer>
  )
}

export default Images;