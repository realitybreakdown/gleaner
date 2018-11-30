import React, { Component } from 'react';
// import PlantForm from '../PlantForm/PlantForm';
import {Link} from 'react-router-dom';
import Plant from '../Plant/Plant';

class AilmentsPage extends Component {
  render() {
    return (
    <div>
        {this.props.match.params.id}
        <Link to="/newplant">Add A New Plant</Link>
        <div>
          <Plant />
        </div>
    </div>
    )
  }
}

export default AilmentsPage;