import React, { Component } from 'react';
// import PlantForm from '../PlantForm/PlantForm';
import {Link} from 'react-router-dom';
import AilmentPlantPage from '../PlantAilPage/AilmentPlantPage';

class AilmentsPage extends Component {
  render() {
    return (
    <div>
        <AilmentPlantPage />
        <div>
        <Link to="/newplant">Add A New Plant</Link>
        </div>
    </div>
    )
  }
}

export default AilmentsPage;