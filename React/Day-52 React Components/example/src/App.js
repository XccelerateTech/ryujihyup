import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './App.css';
import Modal from './Modal'
import faker from "faker";
import CommentCard from "./components/CommentCard";
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter';
import LeaderBoard from './components/LeaderBoard';


const shopping = [
  {id:0, item:"Apples"},
  {id:1, item:"Beef"},
  {id:2, item:"Banana"}
]

function App() {
  
  // const counter = [];
  // for (let i =0; i < this.state.numberOfCounters; i ++){
  //   counters.push(<Counter number={i.toStrong()}/>)
  // }
  
  return (
    <div className="App row">
      <div className="col-6">
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
          Learn React
        </a>
      </header>
      </div>
      <div className="col-6">
        <input type="text" />
          <textarea></textarea>
          <Modal buttonLabel = "This will open a modal"/>
          <br />
          <br />

          <CommentCard
          author="Sam"
          comment="This is a comment."
          image={faker.image.avatar()}
          date={"15/05/2018"}
          />

          <br />

          <ShoppingList
          name="Sam"
          list={shopping}
          />

          <br />

          {/* <Counter
          number="1" /> */}

          <LeaderBoard />

      </div>
    </div>
  );
}

export default App;
