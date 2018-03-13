import React from 'react';

class EyesOnMe extends React.Component {
  constructor(){
    super();

    this.state = {

    }
  }

  focusEvent(){
    console.log("Good!")
  }

  blurEvent(){
    console.log("Hey! Eyes on me!")
  }


  render(){
    return(
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>This is Button</button>
    )
  }


}

export default EyesOnMe;
