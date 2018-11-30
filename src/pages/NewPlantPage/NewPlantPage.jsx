import React, { Component } from 'react';
import PlantForm from '../../components/PlantForm/PlantForm';
import './NewPlantPage.css';

class NewPlantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateForm = (form) => {
    this.setState({form: form});
  }

  render() {
    return (
      <div className='NewPlantPage'>
        <PlantForm {...this.props} updateForm={this.updateForm} 
        handleSignup={this.props.handleSignup}
        />
      </div>
    );
  }
};

export default NewPlantPage;