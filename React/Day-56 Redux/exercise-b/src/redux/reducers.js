import { ADD_LINK, CLEAR_LINK, DELETE_LINK } from './actions';


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

export const rootReducer = (state = initalState, action) => {
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
        links: state.links.filter((link, index) => index != action.index)
      };
    default:
      return state;
  }
};

//links: state.links.splice(action.index, 1)