import React from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';

export default function App() {
    return (
      <div className="App">
        <h1 style={{color: "Background", fontSize: "xxx-large" }}>CRUD Todo App</h1>
        <AddTodo/>
        <Todo/>
      </div>
    );
}
