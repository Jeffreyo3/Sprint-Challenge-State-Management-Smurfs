import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_FAILURE = "ADD_FAILURE";
export const ADD_SUCCESS = "ADD_SUCCESS";

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res);
            dispatch({
            type: LOAD_SUCCESS,
            payload: res.data
            })
        })
        .catch(err => {console.log(err);
            dispatch({
                type: LOAD_FAIL,
                payload: `Error Loading Data: ${err}`
            })
        })
};


export const addSmurf = value => dispatch => {
    console.log("actions, addSmurf, dispatch : ", dispatch)

    dispatch({ type: ADD_SMURF});
        axios
            .post("http://localhost:3333/smurfs", {
                name: value.name,
                age: value.age,
                height: value.height
            })
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: ADD_SUCCESS, 
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_FAILURE, 
                    payload: `Error Loading Data: ${err}`
                })
            })
};