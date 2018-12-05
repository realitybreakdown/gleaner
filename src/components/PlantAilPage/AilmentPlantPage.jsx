import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './AilmentPlantPage.css';
import ailmentService from '../../utils/ailmentService';
import {Link} from 'react-router-dom';


class AilmentPlantPage extends Component {
  state = {
    ailment: {}
  }

  componentDidMount() {
    ailmentService.getAilmentById(this.props.match.params.id)
    .then(ailment => 
      this.setState({ailment}))
  }

  render() {
    return (
      <div className="PlantAilPage">
        <div className="AilmentTitle">
          <h1>{this.state.ailment.name}</h1>
        </div>
        {this.state.ailment.plants && this.state.ailment.plants.map(plant =>
        <Link to={`/plants/${plant._id}`}>
          <div className="PlAil"> 
            <div className="PlAilImg">
                <img src={
                  plant.img ? plant.img : '/img/noimagefound.png'
                  } alt="img" className='AilPlantImgList'>
                </img> 
            </div>
            <div >
              {plant.commonName}
            </div>
          </div>
        </Link>
          )}
          <div className="PlLink">
            <Link to="/newplant">Add A New Plant</Link>
          </div>
      </div>
    )
  }
}

export default withRouter(AilmentPlantPage);