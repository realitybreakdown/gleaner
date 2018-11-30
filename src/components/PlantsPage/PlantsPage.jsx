import React, { Component } from 'react';
import Plant from '../Plant/Plant';
import {Link} from 'react-router-dom';

class PlantsPage extends Component {
  render() {
    return (
      <div>
        <h1>Plants</h1>
        <Plant plants={this.props.plants}/>
        <Link to="/newplant">
          <button className="btn btn-default">Add A Plant</button>
        </Link>
      </div>
    )
  }
}

export default PlantsPage;