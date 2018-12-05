import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AilmentPlantPage from '../PlantAilPage/AilmentPlantPage';

class AilmentsPage extends Component {
  render() {
    return (
    <div>
        <AilmentPlantPage 
          plants={this.props.plants} 
          ailments={this.props.ailments}
        />
        <div>
          <Link to="/newplant">Add A New Plant</Link>
        </div>
    </div>
    )
  }
}

export default AilmentsPage;