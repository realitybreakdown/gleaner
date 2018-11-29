import React from 'react';
import './Ailment.css';

const Ailment = (props) => (
  <div className="Ailment">
    {props.ailments.map(ailment => 
    <div className="Ail">
      <div>
        <img src={ailment.img} alt="{ailment.name}"></img>
      </div>
      <div>
        {ailment.name}
      </div>
    </div>
    )}
  </div>
)

export default Ailment;