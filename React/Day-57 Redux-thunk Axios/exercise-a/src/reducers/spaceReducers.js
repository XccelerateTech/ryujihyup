import { LOAD_ASTRONAUT_SUCCESS, LOAD_ASTRONAUT_FAILURE } from '../actions/spaceActions';

const initialState = {
    astronauts: []
}

export const astronautReducers = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_ASTRONAUT_SUCCESS:
            return {
                ...state,
                astronauts: state.astronauts.concat([...action.astronauts])
            }
        case LOAD_ASTRONAUT_FAILURE:
            return {
                ...state,
                astronauts: state.astronauts
            }
        default:
            return state;
    }
}