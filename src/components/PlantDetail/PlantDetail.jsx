import React, {Component} from 'react';
import './PlantDetail.css';
import plantService from '../../utils/plantService';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

class PlantDetail extends Component {
  
    state = {plant: {} }
    

    componentDidMount() {
        plantService.getPlantById(this.props.match.params.id)
        .then(plant => {
            this.setState({plant});
        });
    }

    handleDeletePlant = (e) => {
        e.preventDefault();
        this.props.handleDeletePlant(this.state.plant._id);
        this.props.history.push('/plants');
    }

    // handleAddPlantToAil = (e) => {
    //     this.props.handleAddPlantToAil(this.props.plants)
    // }

    handleCommentAdd = (e) => {
        this.props.handleCommentAdd(this.props.comments);
    }

    render() {
        // let assignedAilments = this.props.ailments.filter(a => a.plants.some(p => p._id === this.state.plant._id));
        // let unassignedAilments = this.props.ailments.filter(a => !a.plants.some(p => p._id === this.state.plant._id));
        return(
            <div className="PlantDetail">
                <div className="PlantD">
                    <h1>{this.state.plant.commonName}</h1>
                    <div>
                        <img className="PlantImg" src={this.state.plant.img} alt="img"></img>
                    </div>
                    <p>{this.state.plant.binominalName}</p>
                    <p>Binominal Name: {this.state.binomialName}</p>
                    <p>Where to find it: {this.state.plant.location}</p>
                    <p>How to Use: {this.state.plant.uses}</p>
                    <button onClick={this.props.toggleEdit}>Edit</button>
                    <button onClick={this.props.handleAddPlantToAil}>Add To Ailment</button>
                    <button onClick={this.handleDeletePlant}>Delete</button>
                </div>
                <CommentForm handleCommentAdd={this.handleCommentAdd} />
                <CommentList comments={this.state.plant.comments} />
                <div>
                    {/* {assignedAilments} */}
                </div>
                <div>
                    {/* {unassignedAilments} */}
                </div>
            </div>
        );
    }
}


export default PlantDetail;