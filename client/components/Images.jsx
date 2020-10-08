import React from 'react';
import styled from 'styled-components';
import ImagePopOut from './ImagePopOut.jsx';

const ImagesContainer = styled.div`
  margin: 5px 0;
  width: 320px;
  padding: 12px 0;
`

const LargeImageContainer = styled.div`
  position: relative;
`

const LargeImage = styled.img`
  width: 320px;
  height: 180px;
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
  width: 38px;
  height: 38px;
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
  padding: 16px 16px;
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
  padding: 16px 16px;
  border: none;
  border-radius: 5px;
  outline: none;
  z-index: 900;
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
  padding: 16px 16px;
  border: none;
  border-radius: 5px;
  outline: none;
  z-index: 900;
`

const ImagePopOutContainer = styled.div`
  position:fixed;
  top: 5%;
  left: 5%;
  height: 90%;
  width: 90%;
  background-color: black;
  z-index: 1001;
`

class Images extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPhotoIndex: 0,
      popoutPhotoIndex: 0,
      popout: false
    }
  }


  changePhoto(change) {
    this.setState((prevState) => {
      return {
        currentPhotoIndex: change === 'next' ? prevState.currentPhotoIndex + 1 : prevState.currentPhotoIndex -1
      }
    })
  }

  handleThumbnailClick(photoIndex) {
    this.setState({
      currentPhotoIndex: photoIndex
    })
  }

  handlePopOut(photoIndex) {
    this.props.handlePopoutWindow()
    this.setState({
      popoutPhotoIndex: photoIndex,
      popout: true
    })
  }

  handleClosePopout() {
    this.props.handleExit()
    this.setState({
      popout: false
    })
  }

  render () {
    return (
      <ImagesContainer>
        <LargeImageContainer>
          <LargeImage src={this.props.images[this.state.currentPhotoIndex]}/>
          <LeftCarouselButton style={{display: this.state.currentPhotoIndex === 0 ? "none" :  "block" }} onClick={this.changePhoto.bind(this, 'previous')}>{String.fromCharCode(10094)}</LeftCarouselButton>
          <FullViewButton onClick={this.handlePopOut.bind(this, this.state.currentPhotoIndex)}>Full View</FullViewButton>
          <RightCarouselButton style={{display: this.state.currentPhotoIndex === this.props.images.length - 1 ? "none" :  "block" }} onClick={this.changePhoto.bind(this, 'next')}>{console.log('photoindex', this.state.currentPhotoIndex)}{String.fromCharCode(10095)}</RightCarouselButton>
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
        <ImagePopOutContainer style={{display: this.state.popout ? "block" : "none"}}>
          <ImagePopOut popoutImages={this.props.images} handleClosePopout={this.handleClosePopout.bind(this)} photoIndex={this.state.popoutPhotoIndex}></ImagePopOut>
        </ImagePopOutContainer>
      </ImagesContainer>
    )
  }
}

export default Images;