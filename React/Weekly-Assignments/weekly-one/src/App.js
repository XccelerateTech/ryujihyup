import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './screen/HomePage';

// let j = 'google'
// let d = `www.google.com`
// let t = ['Search', 'cool']

// var arr = [{title: j,
//             url: d,
//             tags: t}]



// let myStorage = window.localStorage;
// localStorage.setItem('fuckyou', JSON.stringify(arr));
// console.log(JSON.stringify(myStorage))
// var cat = JSON.parse(localStorage.getItem('fuckyou'));
// console.log(cat)


function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
