const initialState = {
    landings: [],
}

export function landingReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_LANDINGS':
            newState = { ...state, landings: [...action.landings] }
            break;
        default:
    }
    return newState;
}
