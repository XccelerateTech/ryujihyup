// // import React from "react";
// // import ReactDOM from "react-dom";

// // import "./styles.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello CodeSandbox</h1>
// //       <h2>Start editing to see some magic happen!</h2>
// //     </div>
// //   );
// // }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

// import * as React from "react";
// import { createStore } from "redux";
// import { render } from "react-dom";
// import { Provider, connect } from "react-redux";

// const rootReducer = (state) => {
//   return {
//     links: [
//       { title: "Google", url: "https://www.google.com" },
//       { title: "Yahoo", url: "https://www.yahoo.com" },
//       { title: "Facebook", url: "https://www.facebook.com" },
//       { title: "HKO", url: "https://www.hko.gov.hk" },
//       { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
//     ],
//     users: [
//       { name: "Jihyup", hobby: "Gaming Coding"},
//       { name: "Tomoaki", hobby: "Instagram"}
//       ]
//   };
// };

// const store = createStore(rootReducer);

// const UsersList = (props) => {
//   return (
//     <div>
//       {props.users.map((u, i ) => (
//         <div key={i}>
//           {u.name} - {u.hobby}
//         </div>
//       ))}
//     </div>
//   );
// };

// const PureLinkList = (props) => {
//   return (
//     <div>
//       {props.links.map(l => (
//         <div>
//           {l.title} - {l.url}
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     links: state.links,
//     users: state.users
//   };
// };

// const LinkList = connect(mapStateToProps)(PureLinkList)
// const UserList = connect(mapStateToProps)(UsersList);

// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h2>Links</h2>
//       <LinkList />
//     </div>
//     <div>
//       <h2>Users</h2>
//       <UserList />
//     </div>
//   </Provider>
// );

// render(<App />, document.getElementById("root"));
