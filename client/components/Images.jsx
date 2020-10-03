import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  margin: 5px 0;
  width: 415px;
  padding: 12px;
`

const LargeImageContainer = styled.div`
  position: relative;
`
const LargeImage = styled.img`
  width: 415px;
  height: 315px;
  object-fit: cover;
`
const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 2px;
  position: relative;
`

const ThumbnailPhoto = styled.img`
  opacity: 0.5;
  width: 50px;
  height: 50px;
  &:hover {
    opacity: 1;
  }
`

const FullViewButton = styled.button`
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
  outline: none;
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
  outline: none;
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
  outline: none;
`
class Images extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPhotoIndex: 0,
    }
  }


  changePhoto(type) {
    this.setState(prevState => {
      return {
      currentPhotoIndex: type === 'next' ? prevState.currentPhotoIndex + 1 : prevState.currentPhotoIndex -1
      }
    })
  }

  handleThumbnailClick(photoIndex) {
    this.setState({
      currentPhotoIndex: photoIndex
    })
  }

  render () {
    return (
      <ImagesContainer>
        <LargeImageContainer>
          <LargeImage src={this.props.images[this.state.currentPhotoIndex]}/>
          <LeftCarouselButton style={{display: this.state.currentPhotoIndex === 0 ? "none" :  "block" }} onClick={this.changePhoto.bind(this, 'previous')}>{String.fromCharCode(10094)}</LeftCarouselButton>
          <FullViewButton>Full View</FullViewButton>
          <RightCarouselButton style={{display: this.state.currentPhotoIndex === this.props.images.length - 1 ? "none" :  "block" }} onClick={this.changePhoto.bind(this, 'next')}>{String.fromCharCode(10095)}</RightCarouselButton>
        </LargeImageContainer>
        <ThumbnailContainer>
          {this.props.images.map((image, index) => {
            if (image === this.props.images[this.state.currentPhotoIndex]){
              return (
              <ThumbnailPhoto onClick={this.handleThumbnailClick.bind(this, index)} key={index} src={image} style={{opacity: 1}}/>
              )
            }
            return (
              <ThumbnailPhoto onClick={this.handleThumbnailClick.bind(this, index)} key={index} src={image} />
            )
          })}
        </ThumbnailContainer>
      </ImagesContainer>
    )
  }
}

export default Images;