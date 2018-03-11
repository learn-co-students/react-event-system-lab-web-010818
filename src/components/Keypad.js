import React from 'react'

class Keypad extends React.Component {

  consoleLogOnKeyUp() {
    console.log('Entering password...')
  }
  render(){

    return (
      <input type="password" onKeyUp={this.consoleLogOnKeyUp}/>
    )
  }
}

export default Keypad
