import React, {Component} from 'react';
import './PlantDetail.css';
import plantService from '../../utils/plantService';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

class PlantDetail extends Component {
    state = {plant: {comments:[]} }
    
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

    render() {
        let plant = this.props.plants.find(p => p._id === this.props.match.params.id);
        if (!plant) return null;
        // let assignedAilments = this.props.ailments.filter(a => a.plants.some(p => p._id === this.state.plant._id));
        // let unassignedAilments = this.props.ailments.filter(a => !a.plants.some(p => p._id === this.state.plant._id));
        return(
            <div className="PlantDetail">
                <div className="PlantD">
                    <h1>{plant.commonName}</h1>
                    <div>
                        <img className="PlantImg" src={this.state.plant.img} alt="img"></img>
                    </div>
                    <p>Binominal Name: {plant.binomialName}</p>
                    <p>Where to find it: {plant.location}</p>
                    <p>How to Use: {plant.uses}</p>
                    {/* <button onClick={this.props.toggleEdit}>Edit</button> */}
                    <select onClick={this.handleAddPlantToAil} ailments={this.props.ailments}>
                        <option>Add To An Ailment</option>
                        {
                            this.props.ailments.map((ailment) => {
                                return (<option key={ailment.name} >{ailment.name}</option> )
                            })
                        }
                    </select>
                    <button className="deleteBtn" onClick={this.handleDeletePlant}>Delete</button>
                </div>
                <CommentForm plant={plant} handleCommentAdd={this.props.handleCommentAdd} />
                <CommentList comments={plant.comments} />
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