import React, { Component } from 'react'

 class Navbar extends Component {
  
  render() {
    const {title} = this.props;
    return (
      <div>User APP {title}</div>
    )
  }
}

export default Navbar;