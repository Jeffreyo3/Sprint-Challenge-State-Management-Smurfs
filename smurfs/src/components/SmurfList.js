import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { getData } from '../actions';


const SmurfList = (props) => {

    return (
        <>
            <button className="getButton"
            onClick={() => {
                props.getData();
            }}>
                Smurfs??
            </button>
            
            
            <div className="smurf-list">
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <p>. . . L O A D I N G . . .</p>
            ) : (
                <div>
                    {/* {props.smurf.name} */}
                {props.smurf.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))}
                </div>
                
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, {getData})(SmurfList);