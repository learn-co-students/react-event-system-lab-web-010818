// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {
  constructor(){
    super();

    this.state = {

    }
  }

  keysDown = () => {
    console.log("Entering password...")
  }



  render(){
    return(
      <input type="password" onKeyUp={this.keysDown} />

    )
  }


}


export default Keypad;
