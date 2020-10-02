import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//styling

const DescriptionContainer = styled.div`
  padding: 24px 0;
`

class Description extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      readMore: true
    }

    this.readMoreToggle = this.readMoreToggle.bind(this);
    this.readLessToggle = this.readLessToggle.bind(this);
  }

  readMoreToggle() {
    this.setState({ readMore: false })
  }

  readLessToggle(){
    this.setState({ readMore: true })
  }

  render() {
    let paragraphs = this.props.description.split("\n");
    if (this.state.readMore){
      return (
        <DescriptionContainer>
          <div>
          {paragraphs[0]}
            <button style={{backgroundColor: "white", border: "none", borderBottom: "dotted grey 1px", outline: "none"}} onClick={this.readMoreToggle}>Read More {String.fromCharCode(9662)}</button>
          </div>
        </DescriptionContainer>
      )
    } else {
      return (
        <DescriptionContainer>
          <div>
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <button style={{backgroundColor: "white", border: "none", borderBottom: "dotted grey 1px", outline: "none"}} onClick={this.readLessToggle}>Read Less {String.fromCharCode(9652)}</button>
          </div>
        </DescriptionContainer>
      )
    }
  }
}
export default Description;