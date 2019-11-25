

const initialState = {
    isLoading: false
};

const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;