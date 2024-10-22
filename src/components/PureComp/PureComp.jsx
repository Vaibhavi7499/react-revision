import { Component } from "react";
import PureChildComp from "./PureChildComp";
import PureFunComp from "./PureFunComp";

class PureComp extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      name: "Hello",
    };
  }

  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  setName = () => {
    this.setState({
      name: "Hello World!!!!",
    });
  };

  render() {
    return (
      <div className="col-md-6 m-auto text-center mt-5">
        <div>
          <h3>Pure Component Counter {this.state.counter} </h3>
          <button className="btn btn-primary" onClick={this.setCounter}>
            setCounter
          </button>{" "}
          <button className="btn btn-success" onClick={this.setName}>
            setName
          </button>
        </div>
        <div>
          {/* <PureChildComp name={this.state.name} /> */}
          <PureFunComp />
        </div>
      </div>
    );
  }
}

export default PureComp;
