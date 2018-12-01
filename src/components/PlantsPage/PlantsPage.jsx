import React, {Component} from 'react';
import Plant from '../Plant/Plant';
import {Link} from 'react-router-dom';
import './PlantsPage.css'

class PlantsPage extends Component {
  render() {
    return (
      <div>
        <h1>Plants</h1>
        <div className="PlantOn">
          <Plant plants={this.props.plants}/>
        </div>
        <Link to="/newplant" className="btn btn-default"> 
          Add A Plant
        </Link>
      </div>
    )
  }
}

export default PlantsPage;