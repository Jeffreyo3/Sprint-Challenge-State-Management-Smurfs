import React from 'react';

const Smurf = (props) => {
    return (
        <div className="smurf-card">
        <h4>{props.smurf.name}</h4>
        <div className="smurf-info">
            Age: {props.smurf.age}
            <br/>
            Height: {props.smurf.height}
            <br/>
        </div>
        </div>
    )
}

export default Smurf;