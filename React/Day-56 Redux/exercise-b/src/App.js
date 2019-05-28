import * as React from "react";
import { ADD_LINK, CLEAR_LINK, DELETE_LINK, addLink, clearLink, deleteLink} from '../src/redux/actions';
import { Provider, connect } from "react-redux";
import {store} from './redux/store';
import { dispatch } from 'rxjs/internal/observable/pairs';



const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear Links</button>
      {props.links.map((l, i) => (
        <div key={i}>
          {" "}
          {l.title} - {l.url}{" "} <button onClick={()=>{props.deleteLink(i)}}>delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProp = state => {
  return {
    links: state.links
  };
};

// Add the `mapDispatchToProp`
const mapDispatchToProp = dispatch => {
  return {
    addLink: () =>
      dispatch({
        type: ADD_LINK,
        link: {
          title: "Xccelerate",
          url: "https://xccelerate.co/"
        }
      }),
    clearLink: () =>
      dispatch({
        type: CLEAR_LINK
      }),
    deleteLink: (i) =>
      dispatch({
        type: DELETE_LINK,
        index: i
      })
    };
};

// Link with connect()
export const LinkList = connect(
  mapStateToProp,
  mapDispatchToProp
)(PureLinkList);

export const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);