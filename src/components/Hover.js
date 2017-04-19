import React, { Component } from 'react';
import 'tachyons/css/tachyons.css';

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      randomMultiplier: Math.random(),
      imageLocation: props.imageLocation
    }

    this.showPics = this.showPics.bind(this);
    this.hidePics = this.hidePics.bind(this);
    this.trackMouse = this.trackMouse.bind(this);
  }
  componentDidMount () {
    const hoverHolder = document.getElementById('hover'+ this.props.projectId);
    const parent = hoverHolder.parentElement;

    parent.addEventListener('mouseenter', this.showPics);
    parent.addEventListener('mouseleave', this.hidePics);
  }

  componentWillUnmount () {
    const hoverHolder = document.getElementById('hover'+ this.props.projectId);
    const parent = hoverHolder.parentElement;

    parent.removeEventListener('mouseenter', this.showPics);
    parent.removeEventListener('mouseleave', this.hidePics);
  }

  showPics (event) {
    const hoverHolder = event.target.querySelector('#hover'+ this.props.projectId);

    event.target.addEventListener('mousemove', (event) => {
      this.trackMouse(event, hoverHolder);
    });
    hoverHolder.setAttribute('style', 'display: block');
  }

  hidePics (event) {
    const hoverHolder = event.target.querySelector('#hover'+ this.props.projectId);

    hoverHolder.setAttribute('style', 'display: none');
    event.target.removeEventListener('mousemove', (event) => {
      this.trackMouse(event, hoverHolder);
    });
  }

  trackMouse (event, imgParent) {
    const images = imgParent.childNodes;
    const cursorMargin = 30;

    images.forEach( (image, index) => {
      const imageHeight = image.offsetHeight;
      const imageWidth = image.offsetWidth;

      if (this.state.imageLocation === 'top') {
        let newX = null;
        let newY = null;
        let imageRotation = null;

        if (index === 0) {
          newX = event.clientX - imageWidth - cursorMargin;
          newY = event.clientY - imageHeight - cursorMargin;
          imageRotation = -30 * this.state.randomMultiplier;
        } else {
          newX = event.clientX + cursorMargin;
          newY = event.clientY - imageHeight - cursorMargin;
          imageRotation = 30 * this.state.randomMultiplier;
        }
        image.setAttribute('style', `left: ${newX + 'px'}; top: ${newY + 'px'}; transform: rotateZ(${imageRotation + 'deg'})`);

      } else if (this.state.imageLocation === 'right') {
        let newX = null;
        let newY = null;
        let imageRotation = null;

        if (index === 0) {
          newX = event.clientX + cursorMargin;
          newY = event.clientY - imageHeight - cursorMargin;
          imageRotation = 30 * this.state.randomMultiplier;
        } else {
          newX = event.clientX + cursorMargin;
          newY = event.clientY + cursorMargin;
          imageRotation = 60 * this.state.randomMultiplier;
        }
        image.setAttribute('style', `left: ${newX + 'px'}; top: ${newY + 'px'}; transform: rotateZ(${imageRotation + 'deg'})`);

      } else if (this.state.imageLocation === 'left') {
        let newX = null;
        let newY = null;
        let imageRotation = null;

        if (index === 0) {
          newX = event.clientX - imageWidth - cursorMargin;
          newY = event.clientY - imageHeight - cursorMargin;
          imageRotation = -30 * this.state.randomMultiplier;
        } else {
          newX = event.clientX - imageWidth - cursorMargin;
          newY = event.clientY + cursorMargin;
          imageRotation = -60 * this.state.randomMultiplier;
        }
        image.setAttribute('style', `left: ${newX + 'px'}; top: ${newY + 'px'}; transform: rotateZ(${imageRotation + 'deg'})`);
      }
    })
  }

  render () {
    return (
      <div id={'hover' + this.props.projectId} className="hover-pic">
        <img className="pic" alt={this.props.projectId + ' 1st hover pic'} src={this.props.hoverPics[0]} />
      </div>
    )
  }
}
