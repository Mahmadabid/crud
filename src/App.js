import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';

export default function App() {

  const [render, setRender] = useState(false);

    return (
      <div className="App">
        <h1 style={{color: "Background", fontSize: "xxx-large" }}>CRUD Todo App</h1>
        <AddTodo setRender={setRender} />
        <Todo render={render} setRender={setRender} />
      </div>
    );
}
