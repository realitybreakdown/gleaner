import React, { Component } from 'react';
import AilmentPlantPage from '../PlantAilPage/AilmentPlantPage';

class AilmentsPage extends Component {
  render() {
    return (
    <div>
        <AilmentPlantPage 
          plants={this.props.plants} 
          ailments={this.props.ailments}
        />
    </div>
    )
  }
}

export default AilmentsPage;