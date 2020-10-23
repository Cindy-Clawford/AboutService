import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//styling

const DescriptionContainer = styled.div`
  height: 300px;
  }
`
const ParagraphsContainer = styled.div`
  font-size: 14px;
`
const ReadMoreButton = styled.button`
  background-color: white;
  border: none;
  border-bottom: dotted grey 1px;
  outline: none;
`

const ReadLessButton = styled.button`
  background-color: white;
  border: none;
  border-bottom: dotted grey 1px;
  outline: none;
`

class Description extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      readMore: true,
      overflow: false
    }

    this.readMoreToggle = this.readMoreToggle.bind(this);
    this.readLessToggle = this.readLessToggle.bind(this);
  }

  componentDidMount(){
    var pdiv = document.getElementById('paragraphs');
    var hdiv = pdiv.offsetHeight;
    if (hdiv > 300) {
      this.setState({
        overflow: true
      })
    }
  }

  readMoreToggle() {
    this.setState({ readMore: false })
  }

  readLessToggle(){
    this.setState({ readMore: true })
  }


  render() {
    let paragraphs = this.props.description.split('\n');
    if (!this.state.overflow) {
      return (
        <div>
          <DescriptionContainer>
            <ParagraphsContainer id="paragraphs">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </ParagraphsContainer>
          </DescriptionContainer>
        </div>
      )
    } else {
      return (
        <div>
          <DescriptionContainer style={{overflow: this.state.overflow ? "hidden" : "auto", height: this.state.readMore ? "300px" : "auto"}}>
            <ParagraphsContainer id="paragraphs">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </ParagraphsContainer>
          </DescriptionContainer>
          {this.state.overflow ? <div><ReadMoreButton style={{display: this.state.readMore ? "block" : "none"}} onClick={this.readMoreToggle}>Read More {String.fromCharCode(9662)}</ReadMoreButton><ReadLessButton style={{display: this.state.readMore ? "none" : "block"}} onClick={this.readLessToggle}>Read Less {String.fromCharCode(9652)}</ReadLessButton></div> : <div></div>}
        </div>
      )
    }
  }
}
export default Description;