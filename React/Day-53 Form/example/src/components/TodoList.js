import React from 'react';


function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['Finish document', 'Submit product', 'Nag Dan to review'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }

  export default TodoList;