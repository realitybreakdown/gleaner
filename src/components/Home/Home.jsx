import React, { Component } from 'react';
import Ailment from '../Ailment/Ailment';

class Home extends Component {
  render() {
    return (
    <div>
        <h1>Gleaner</h1>
        <Ailment ailments={this.props.ailments}/>
    </div>
    )
  }
}

export default Home;