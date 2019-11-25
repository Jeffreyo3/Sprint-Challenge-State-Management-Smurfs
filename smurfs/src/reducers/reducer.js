import {
    GET_DATA,
    LOAD_SUCCESS,
    LOAD_FAIL
} from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    smurf: []
};

const reducer = (state = initialState, action) => {
    // console.log(state, action);
    switch(action.type) {

        case GET_DATA:
            return {
                ...state,
                isLoading: true
            };

        case LOAD_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            };

        case LOAD_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
}

export default reducer;