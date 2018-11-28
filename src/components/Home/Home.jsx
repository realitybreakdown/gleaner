import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <div>
        <h1>Gleaner</h1>
    
        <div className="card-group">
            <div className="card">
                    <img className="card-img-top" src=".../100px180/" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Home;