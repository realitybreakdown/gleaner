import React from 'react';
import './Ailment.css';
import {Link} from 'react-router-dom';

const Ailment = (props) => (
  <div className="Ailment">
    {props.ailments.map(ailment =>
      <Link to={`/ailments/${ailment._id}`}>
        <div className="Ail">
          <div>
            <img src={ailment.img} alt="{ailment.name}"></img>
          </div>
          <div>
            {ailment.name}
          </div>
        </div>
      </Link>
    )}
  </div>
)

export default Ailment;