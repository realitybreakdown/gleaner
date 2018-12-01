import React from 'react';
import './Plant.css';
import {Link} from 'react-router-dom';

const Plant = (props) => (
  <div className="Plant" plant={props.plant}>
    {props.plants.map(plant =>
      <Link to={`/plants/${plant._id}`}>
        <div className="Pl">
          <div>
              <img src={props.img} alt="img"></img>
          </div>
          <div plant={props.plant}>
            {plant.commonName}
          </div>
        </div>
      </Link>
    )}
  </div>
)

export default Plant;