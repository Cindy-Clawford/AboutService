import React from 'react';
import styled from 'styled-components';

const MainImageContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 23%;
  width: 1200px;
  height: 675px;
  z-index: 1007;
  overflow: hidden;
`

const MainImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 1200px;
  height: 675px;
  z-index: 1010;
`

const PopoutTop = styled.div`
  position: absolute;
  background: grey;
  height: 50px;
  width: 100%;
  z-index: 1003;
`

const ExitButton = styled.button`
  position: absolute;
  background: none;
  outline: none;
  color: black;
  right: 0;
  font-size: 50px;
  z-index: 1003;
  border: none;
  float: right;
`

const LeftPanel = styled.div`
  position: absolute;
  background: grey;
  height: 95.6%;
  width: 200px;
  z-index: 1003;
  padding: 20px;
  margin: auto;
`

const PanelThumbnail = styled.img`
  opacity: 0.5;
  width: 160px;
  height: 90px;
  z-index: 1005;
  &:hover {
    opacity: 1;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 9px;
`

const PopRightCarouselButton = styled.button`
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
  top: 50%;
  right: 0;
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 24px 24px;
  border: none;
  border-radius: 5px;
  outline: none;
  z-index: 1020;
  float: right;
`

const PopLeftCarouselButton = styled.button`
  position: absolute;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
  }
  top: 50%;
  left: 0;
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 24px 24px;
  border: none;
  border-radius: 5px;
  outline: none;
  z-index: 1020;
`

class ImagePopout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      popoutIndex: this.props.photoIndex,
      fromCurrentPhoto: true
    }
  }

  componentDidUpdate(){
    if ((this.props.photoIndex !== this.state.popoutIndex) && (this.state.fromCurrentPhoto)) {
      this.setState({
        popoutIndex: this.props.photoIndex
      })
    }
  }

  changePopoutPhoto(change) {
    this.setState((prevState) => {
      return {
        fromCurrentPhoto: false,
        popoutIndex: change === 'next' ? prevState.popoutIndex + 1 : prevState.popoutIndex -1
      }
    })
  }

  handlePopThumbnailClick(photoIndex) {
    this.setState({
      popoutIndex: photoIndex,
      fromCurrentPhoto: false,
    })
  }

  handleExitClick(){
    this.props.handleClosePopout()
    if (!this.state.fromCurrentPhoto){
      this.setState({
        fromCurrentPhoto: true,
      })
    }
  }

  render() {
    return (
      <div>
        <PopoutTop>
          <ExitButton onClick={this.handleExitClick.bind(this)}>{String.fromCharCode(10005)}</ExitButton>
        </PopoutTop>
        <LeftPanel>
          {this.props.popoutImages.map((image, index) => {
            if (image === this.props.popoutImages[this.state.popoutIndex]){
              return (
              <PanelThumbnail onClick={this.handlePopThumbnailClick.bind(this, index)} key={index} src={image} style={{opacity: 1}}/>
              )
            }
            return (
              <PanelThumbnail onClick={this.handlePopThumbnailClick.bind(this, index)} key={index} src={image} />
            )
          })}
        </LeftPanel>
          <MainImageContainer>
            <MainImage src={this.props.popoutImages[this.state.popoutIndex]} />
            <PopLeftCarouselButton style={{display: this.state.popoutIndex === 0 ? "none" :  "block"}} onClick={this.changePopoutPhoto.bind(this, 'previous')}>{String.fromCharCode(10094)}</PopLeftCarouselButton>
            <PopRightCarouselButton style={{display: this.state.popoutIndex === this.props.popoutImages.length - 1 ? "none" :  "block"}} onClick={this.changePopoutPhoto.bind(this, 'next', 'popout')}>{String.fromCharCode(10095)}</PopRightCarouselButton>
          </MainImageContainer>
      </div>
    )
  }
}

export default ImagePopout;