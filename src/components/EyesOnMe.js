// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {


  onFocus = () => console.log('Good!');
  onHandle = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onHandle}>
      </button>
    )

  }
}

export default EyesOnMe;
