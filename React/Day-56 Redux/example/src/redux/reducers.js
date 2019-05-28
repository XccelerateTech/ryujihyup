import { ADD_LINK, CLEAR_LINKS } from './actions';

const initialState = {
    links: [
        {
            title: "Google", url: "https://www.google.com"
        },
        {
            title: "Yahoo", url: "https://www.yahoo.com"
        },
    ]
}

export function rootReducer ( state = initialState, action){
    switch(action.type){
        case ADD_LINK:
            return  {
                links: state.links.concat([action.link])
            };
        case CLEAR_LINKS:
            return {
                links: []
            }
        default:
            return state;
    }
}