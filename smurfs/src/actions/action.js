import Axios from 'axios;'

export const GET_DATA = "GET_DATA";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});

    Axios
        .get('')
        .then(res => dispatch({
            type: LOAD_SUCCESS,
            payload: res.value
            })
        )
        .catch(err => {console.log(err);
            dispatch({
                type: LOAD_FAIL,
                payload: `Error Loading Data: ${err}`
            })
        })
};