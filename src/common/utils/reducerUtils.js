export function createReducer(initialState, fnMap) {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type];

        return handler ? handler(state, payload) : state;
    };
}

export function reduceReducers(...reducers) {
    return (previous, current) =>
        reducers.reduce(
            (p, r) => r(p, current),
            previous
        );
}

export function createConditionalSliceReducer(sliceName, fnMap) {
    // Create a reducer that know how to handle one lsice of state, with these action types
    const sliceReducer = createReducer({}, fnMap);

    // Creating a new wrapping reducer
    return (state, action) => {
        // Check to see if this slice reducer knows how to handle this action
        if(fnMap[action.type]) {
            // If it does, pass the slice to the slice reducer, and update the slice
            return {
                ...state,
                [sliceName] : sliceReducer(state[sliceName], action),
            };
        }

        // Otherwise return the existing state unchanged
        return state;
    }
}