import React from "react";
import mg1 from "./images/download.jpg";
export default class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src= {mg1} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  