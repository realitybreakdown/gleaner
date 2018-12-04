import React from 'react';
import './Plant.css';
import {Link} from 'react-router-dom';

const Plant = (props) => (
  <div className="Plant" plant={props.plant}>
    {props.plants.map(plant =>
      <Link to={`/plants/${plant._id}`}>
        <div className="Pl"> 
          <div plant={props} className="PlImg">
              <img src={plant.img} alt="img" className='PlantImgList'></img>
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
// {
//   plant.img 
//   ? 
//   <img src={plant.img} alt="img" className='PlantImgList'> </img>
//   :
//   <img src="/img/noimagefound.png" alt="img" className="PlantImgList"></img> 
// }