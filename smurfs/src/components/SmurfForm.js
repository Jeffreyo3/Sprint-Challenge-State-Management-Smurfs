import React from 'react';

import { addSmurf } from '../actions';
import { connect } from 'react-redux';

const SmurfForm = (props) => {

    const [smurfInfo, setSmurfInfo] = React.useState({name: "", age: "", height: "", id: Date.now()});
    const handleChanges = e => {
        setSmurfInfo({...smurfInfo, [e.target.name]: e.target.value})
    };
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        props.addSmurf(smurfInfo);
        setSmurfInfo({name: "", age: "", height: "", id: Date.now()})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={smurfInfo.name} onChange={handleChanges}></input>
            <input type="text" placeholder="Age" value={smurfInfo.age} onChange={handleChanges}></input>
            <input type="text" placeholder="Height" value={smurfInfo.height} onChange={handleChanges}></input>
            <button className="addSmurf">Add Smurf</button>
        </form>
    )
}

export default connect(null, {addSmurf})(SmurfForm);