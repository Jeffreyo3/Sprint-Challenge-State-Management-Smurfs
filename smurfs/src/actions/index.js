import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const ADD_SMURF = "ADD_SMURF";

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({
            type: LOAD_SUCCESS,
            payload: res.data
            })}
        )
        .catch(err => {console.log(err);
            dispatch({
                type: LOAD_FAIL,
                payload: `Error Loading Data: ${err}`
            })
        })
};

export const addSmurf = () => payload => {
    return {
        type: ADD_SMURF,
        payload: payload
    };
};