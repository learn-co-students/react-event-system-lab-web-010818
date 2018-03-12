import React from 'react';

export default class Keypad extends React.Component {

  inputEventListener = () => console.log('Entering password...')

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.inputEventListener}></input>
      </div>
    )
  }
}
