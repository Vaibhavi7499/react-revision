import { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    console.log("This is constructor lifecycle");
    super()
    this.state={
name:"hello"
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("This is getDerivedStateFromProps lifecycle");
    console.log(props,state);
    return "abc"
  }

  componentDidMount(){
console.log("This is componentDidMount lifecycle ")
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("This is shouldComponentUpdate lifecycle ")
    console.log(nextProps,nextState)
    if(nextProps !== nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("This is getSnapshotBeforeUpdate lifecycle ")
    console.log(prevProps,prevState)
return "something"
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("This is componentDidUpdate lifecycle ")
    console.log(prevProps,prevState,snapshot)
  }

  componentWillUnmount(){
    console.log("This is componentWillUnmount lifecycle ")
  }

   changeName = () =>{
    this.setState({
        name:"kishor fawade"
    })
  }
  render() {
    console.log("This is render lifecycle")
    return (
      <div>
        <h1>Lifecycle</h1>
        <h3>{this.state.name}</h3>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default LifeCycle;
