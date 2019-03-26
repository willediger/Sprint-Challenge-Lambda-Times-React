import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {}

  }
  componentDidMount() {
    this.setState({
      imgs: carouselData,
      selectedIdx: 0
    })
  }

  leftClick = () => {
    this.setState(prevState => {
      let newIdx = prevState.selectedIdx - 1
      if (newIdx < 0) {
        newIdx = prevState.imgs.length - 1;
      }
      return {selectedIdx: newIdx}
    })
  }

  rightClick = () => {
    this.setState(prevState => {
      let newIdx = prevState.selectedIdx + 1
      if (newIdx > prevState.imgs.length - 1) {
        newIdx = 0;
      }
      return {selectedIdx: newIdx}
    })
  }

  selectedImage = () => {
    const src = this.state.imgs[this.state.selectedIdx];
    return <img src={src} style={{display: 'block'}} alt={src} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.state.imgs ?
          this.selectedImage() :
          "Loading Carousel"
        }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}