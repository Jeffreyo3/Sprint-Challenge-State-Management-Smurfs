import React from 'react';

import { addSmurf } from '../actions';
import { connect } from 'react-redux';

const SmurfForm = (props) => {

    const [smurfInfo, setSmurfInfo] = React.useState({name: "", age: "", height: ""});
    const handleChanges = e => {
        setSmurfInfo({...smurfInfo, [e.target.name]: e.target.value})
    };
    const handleSubmit = e => {
        e.preventDefault();
        // e.target.reset();
        props.addSmurf(smurfInfo);
        console.log(smurfInfo)
        setSmurfInfo({name: "", age: "", height: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" value={smurfInfo.name} onChange={handleChanges}></input>
            <input name="age" type="number" placeholder="Age" value={smurfInfo.age} onChange={handleChanges}></input>
            <input name="height" type="number" placeholder="Height" value={smurfInfo.height} onChange={handleChanges}></input>
            <button className="addSmurf">Add Smurf</button>
        </form>
    )
}

export default connect(null, {addSmurf})(SmurfForm);