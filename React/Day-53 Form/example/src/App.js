import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './App.css';
import Modal from './Modal'

import TodoList from './components/TodoList';
import Hello from './components/Hello';
import Page from './components/Page';
import NameForm from './components/Forms';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TodoList />
        </a>
      </header>
      <Hello>
          Jihyup
      </Hello>

      <Page />
      <Modal />
      <NameForm />
    </div>
  );
}

export default App;
