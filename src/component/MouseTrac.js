import React from "react";
import Mouse from "./mouse";
import Cat from "./cat";
export default class MouseTracker extends React.Component {
  
  renderTheCat(mouse) {
  return <Cat mouse={mouse} />;
}

render() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={this.renderTheCat} />
    </div>
  );
}
}