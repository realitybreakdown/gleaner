import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plantService from '../../utils/plantService';
import PlantDetail from '../PlantDetail/PlantDetail';
import './PlantForm.css'

class PlantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commonName: '',
            binomialName: '',
            location: '',
            uses: '',
            img: '',
            edit: false
        }
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        delete this.state.plant;
        delete this.state.edit;
        plantService.newPlant(this.state)
        .then(plant => {
            this.props.handleCreatePlant(plant);
            this.props.history.push(`/plants/${plant._id}`);
        });
    }

    toggleEdit = () => this.setState({ edit: !this.state.edit })

    render() {
        console.log(this.state)
        return (
            <div>
                <header className="header-footer">Add A New Plant</header>
                {this.state.plants && !this.state.edit
                    ?
                    <PlantDetail plant={this.state.plant} toggleEdit={this.toggleEdit} />
                    :
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="img-form">
                                <input type="file" name="img" className="form-img" placeholder="Image" value={this.state.img} onChange={(e) => this.handleChange('img', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input name="commonName" className="form-control" placeholder="Common Name" value={this.state.commonName} onChange={(e) => this.handleChange('commonName', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input name="binominalName" className="form-control" placeholder="Binomial Name" value={this.state.binomialName} onChange={(e) => this.handleChange('binomialName', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input name="location" className="form-control" placeholder="Location" value={this.state.location} onChange={(e) => this.handleChange('location', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input name="uses" className="form-control" placeholder="Uses" value={this.state.uses} onChange={(e) => this.handleChange('uses', e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-default" onClick={this.handleSubmit}>Create Plant</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                }
            </div>
        );
    }
};

export default PlantForm;