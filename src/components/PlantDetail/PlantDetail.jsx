import React, {Component} from 'react';
import './PlantDetail.css';
import plantService from '../../utils/plantService';

class PlantDetail extends Component {
    state = {plant: {}};

    componentDidMount() {
        plantService.getPlantById(this.props.match.params.id)
        .then(plant => {
            this.setState({plant});
        });
    }

    render() {
        return(
            <div className="PlantDetail">
                <div className="PlantD">
                    <h1>{this.state.plant.commonName}</h1>
                    <div className="PlantD">
                        <img src={this.state.plant.img} alt="img"></img>
                    </div>
                    <p>{this.state.plant.binominalName}</p>
                    <p>{this.state.plant.location}</p>
                    <p>{this.state.plant.uses}</p>
                    <button onClick={this.props.toggleEdit}>Edit</button>
                </div>
            </div>
        );
    }
}


export default PlantDetail;