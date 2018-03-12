
import React from 'react';

class Keypad extends React.Component {

handleInputPassword = () => console.log('Entering password...') //need to use an arrow function so that it

  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.handleInputPassword}
        />
      </div>
    )
  }
}

export default Keypad;


//can only input a function into the event listener {brackets}
