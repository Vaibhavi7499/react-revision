import { Component, PureComponent } from "react";

class PureChildComp extends PureComponent {
  constructor() {
    super();
  }
  render() {
    console.log("child");
    return (
      <div>
        <h3>Pure Child Component Name : {this.props.name} </h3>
      </div>
    );
  }
}

export default PureChildComp;
