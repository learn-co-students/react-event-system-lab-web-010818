// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  good = () => {
    console.log("Good!")
  }

  eyes = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.good} onBlur={this.eyes}>"Click me"</button>
    )
  }
}


export default EyesOnMe;
