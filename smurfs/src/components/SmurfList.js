import React from 'react';


const SmurfList = (props) => {

    return (
        <div className="SmurfList">
            <button></button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurf: state.smurf
    }
}

export default SmurfList;