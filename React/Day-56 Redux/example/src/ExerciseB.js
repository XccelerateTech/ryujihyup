// import * as React from "react";
// import { createStore } from "redux";
// import { render } from "react-dom";
// import { Provider, connect } from "react-redux";

// //Define ADD_LINK and CLEAR_LINK as actions.
// const ADD_LINK = "ADD_LINK";

// const CLEAR_LINK = "CLEAR_LINK";

// const DELETE_LINK = "DELETE_LINK";

// const initalState = {
//   links: []
// };




// const rootReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case ADD_LINK:
//       return {
//         links: state.links.concat([action.link])
//       };
//     case CLEAR_LINK:
//       return {
//         links: []
//       };
//     case DELETE_LINK:
//       return {
//         links: state.links.splice([0, 1])
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);

// const PureLinkList = props => {
//   return (
//     <div>
//       <button onClick={props.addLink}>New Link</button>
//       <button onClick={props.clearLink}>Clear Links</button>
//       {props.links.map((l, i )=> (
//         <div key={i}>
//           {" "}
//           {l.title} - {l.url}{" "} <button onClick={props.deleteLink}>delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProp = state => {
//   return {
//     links: state.links
//   };
// };

// // Add the `mapDispatchToProp`
// const mapDispatchToProp = dispatch => {
//   return {
//     addLink: () =>
//       dispatch({
//         type: ADD_LINK,
//         link: {
//           title: "Xccelerate",
//           url: "https://xccelerate.co/"
//         }
//       }),
//     clearLink: () =>
//       dispatch({
//         type: CLEAR_LINK
//       }),
//     deleteLink: () =>
//       dispatch({
//         type: DELETE_LINK
//       })
//   };
// };

// // Link with connect()
// const LinkList = connect(
//   mapStateToProp,
//   mapDispatchToProp
// )(PureLinkList);

// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h2>Links</h2>
//       <LinkList />
//     </div>
//   </Provider>
// );

// render(<App />, document.getElementById("root"));

import * as React from "react";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";

//Define ADD_LINK and CLEAR_LINK as actions.
const ADD_LINK = "ADD_LINK";

const CLEAR_LINK = "CLEAR_LINK";

const initalState = {
  links: []
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link])
      };
    case CLEAR_LINK:
      return {
        links: []
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear Links</button>
      {props.links.map(l => (
        <div>
          {" "}
          {l.title} - {l.url}{" "}
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
      })
  };
};

// Link with connect()
const LinkList = connect(
  mapStateToProp,
  mapDispatchToProp
)(PureLinkList);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));

