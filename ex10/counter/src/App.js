import React from 'react';
// import ReactDOM from 'react-dom/client';
// import axios from 'axios'
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0     
    };
    // this.calculatetotalmarks=this.handleinputchange.bind(this)
    // this.handleinputchange=this.handleinputchange.bind(this)
  }
 
  increment=()=>{
    var temp=this.state.count;
    this.setState({count:temp+=1});
    document.getElementById("count").innerHTML=this.state.count;

  
    // document.getElementById("total").innerHTML="Total: "+this.state.total;
  }
  decrement=()=>{
    var temp=this.state.count;
    this.setState({count:temp-=1});
    document.getElementById("count").innerHTML=this.state.count;
  }
  render() {
    return (
      <div>
          <h1 id="count" >{this.state.count}</h1>
          <button onClick={this.increment} >increment</button>
          <button onClick={this.decrement} >decrement</button>
      </div>
    );
  }
}
export default Car;
