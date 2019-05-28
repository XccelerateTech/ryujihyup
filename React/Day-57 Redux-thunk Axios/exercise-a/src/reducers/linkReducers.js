import { ADD_LINK, CLEAR_LINK, DELETE_LINK, LOAD_LINK_SUCCESS, LOAD_LINK_FAILURE } from '../actions/linkActions';


const initalState = {
    links: [
        {
            title: "google", url: 'https://www.google.com'
        },
        {
            title: "yahoo", url: 'https://www.yahoo.com'
        },
        {
            title: "facebook", url: 'https://www.facebook.com'
        }
    ]
};

export const linkReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link])
      };
    case CLEAR_LINK:
      return {
        links: []
      };
    case DELETE_LINK:
      return {
        links: state.links.filter((link, index) => index !== action.index)
      };
    case LOAD_LINK_SUCCESS:
        return {
            ...state,
            links: state.links.concat([...action.links])
        };
    case LOAD_LINK_FAILURE:
        return {
            ...state,
            links: state.links
        }
    default:
      return state;
  }
};

//links: state.links.splice(action.index, 1)