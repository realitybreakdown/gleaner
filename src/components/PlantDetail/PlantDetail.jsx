import React from 'react';

const PlantDetail = ({commonName, binominalName, uses, location, toggleEdit}) => (
      <div className="PlantDetail">
        <h1>{commonName}</h1>
        <p>{binominalName}</p>
        <p>{uses}</p>
        <p>{location}</p>
        {console.log('location: ', location)}
        <button onClick={toggleEdit}>Edit</button>
      </div>
);


export default PlantDetail;