import * as React from "react";
import { ADD_LINK, CLEAR_LINK, DELETE_LINK, loadLinkThunk} from './actions/linkActions';
import { loadAstronautThunk } from './actions/spaceActions';
import { Provider, connect } from "react-redux";
import {store} from './store';
// import axios from 'axios';

// const getData = () => {
//   axios.get('http://api.open-notify.org/astros.json')
//   .then(res => {
//     let astronauts = res.data.people.map(human => ({
      
//   }))
//     console.log(astronauts)
//     console.log(res.data.people)
//   })
// }

// getData();


const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear Links</button>
      <button onClick={props.loadLinks}>Load Links</button>
      {props.links.map((l, i) => (
        <div key={i}>
          {" "}
          {l.title} - {l.url}{" "} <button onClick={()=>{props.deleteLink(i)}}>delete</button>
        </div>
      ))}
    </div>
  );
};

const PureAstronautsList = props => {
  return (
    <div>
      <button onClick={props.loadAstronauts}>Load Astronauts</button>
      <h2>Astronauts</h2>
      {props.astronauts.map((a, i)=> (
        <div key={i}>
          {" "}
          {a.craft} - {a.name}
        </div>
      ))}
    </div>
  )
}

const mapStateToProp = state => {
  return {
    links: state.linkStore.links,
    astronauts: state.spaceStore.astronauts
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
      }),
    loadLinks: () =>
      dispatch(loadLinkThunk()
      ),
    loadAstronauts: () =>
    dispatch(loadAstronautThunk())
  }
};

// Link with connect()
export const LinkList = connect(
  mapStateToProp,
  mapDispatchToProp
)(PureLinkList);

export const AstronautsList = connect(
  mapStateToProp,
  mapDispatchToProp
)(PureAstronautsList);

export const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
      <h2>Who is in the Space now?</h2>
      <AstronautsList />
    </div>
  </Provider>
);