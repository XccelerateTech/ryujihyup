import { combineReducers } from 'redux';
import { linkReducers } from './linkReducers';
import { astronautReducers } from './spaceReducers'

export const rootReducer = combineReducers({
    linkStore: linkReducers,
    spaceStore: astronautReducers,
})