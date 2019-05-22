import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import Modal from './Modal'
import './App.css';

import Questioner from './components/Questioner';

function App() {
  return (
    <div className="App">
      <Questioner />
    </div>
  );
}

export default App;
