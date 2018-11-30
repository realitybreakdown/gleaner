import React from 'react';
import './Plant.css';
import {Link} from 'react-router-dom';
// import PlantDetail from '../PlantDetail/PlantDetail';

const Plant = (props) => (
  <div className="Plant">
    {props.plants.map(plant =>
      <Link to={`/plants/${plant._id}`}>
        <div className="Pl">
          <div>
              {/* <img src="{plant.img}"></img> */}
          </div>
          <div>
            {plant.commonName}
          </div>
        </div>
      </Link>
    )}
  </div>
)

export default Plant;