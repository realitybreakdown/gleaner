import React, { Component } from 'react';
// import PlantForm from '../PlantForm/PlantForm';
import {Link} from 'react-router-dom';
import PlantAilPage from '../PlantAilPage/PlantAilPage';

class AilmentsPage extends Component {
  render() {
    return (
    <div>
        <PlantAilPage />
        <div>
        <Link to="/newplant">Add A New Plant</Link>
        </div>
    </div>
    )
  }
}

export default AilmentsPage;