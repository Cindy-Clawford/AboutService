import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  margin: 5px 0;
`

const LargeImageContainer = styled.div`
  position: relative;
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
  position: relative;
`

const ThumbnailPhoto = styled.img`
  opacity: 0.5;
`

const FullViewButton = styled.button`
  /* display: none; */
  &:hover {
    opacity: 0.7;
    }
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 35%;
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 24px 24px;
  border: none;
  border-radius: 5px;
`

const LeftCarouselButton = styled.button`
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
  top: 40%;
  left: 0;
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 24px 24px;
  border: none;
  border-radius: 5px;
`

const RightCarouselButton = styled.button`
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
  top: 40%;
  right: 0;
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 24px 24px;
  border: none;
  border-radius: 5px;
`
class Images extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPhotoIndex: 0
    }
  }


  changePhoto(type) {
    if (this.state.currentPhotoIndex === this.props.images.length - 1) {
      //remove button on right
      return;
    }
    // if (this.state.currentPhotoIndex === 0) {
    //   //remove button on left

    // }
    this.setState(prevState => {
      return {
      currentPhotoIndex: type === 'next' ? prevState.currentPhotoIndex + 1 : prevState.currentPhotoIndex -1
      }
    })
  }

  render () {
    return (
      <ImagesContainer>
        <LargeImageContainer>
          <LargeImage src={this.props.images[this.state.currentPhotoIndex]}/>
          <LeftCarouselButton onClick={this.changePhoto.bind(this, 'previous')}>{String.fromCharCode(10094)}</LeftCarouselButton>
          <FullViewButton>Full View</FullViewButton>
          <RightCarouselButton onClick={this.changePhoto.bind(this, 'next')}>{String.fromCharCode(10095)}</RightCarouselButton>
        </LargeImageContainer>
        <ThumbnailContainer>
          {this.props.images.map((image, index) => {
            return (
            <ThumbnailPhoto key={index} src={image} width="50" height="50"/>
            )
          })}
        </ThumbnailContainer>
      </ImagesContainer>
    )
  }
}

export default Images;