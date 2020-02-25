import {
    GET_DATA,
    LOAD_SUCCESS,
    LOAD_FAIL,
    ADD_SMURF,
    ADD_FAILURE,
    ADD_SUCCESS
} from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    smurf: [

    ]
};

const reducer = (state = initialState, action) => {
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


        case ADD_SMURF:
            return {
                ...state,
                isLoading: true
            };

        case ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: [...action.payload]
            };

        case ADD_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;