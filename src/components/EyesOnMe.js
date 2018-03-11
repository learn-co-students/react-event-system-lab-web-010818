// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  respondGood = () => {
    console.log('Good!')
  }

  respondBad = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.respondGood} onBlur={this.respondBad}></button>
    )
  }
}

export default EyesOnMe
