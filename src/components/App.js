import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './ListTodo';
import FilterTodo from './FilterTodo';
import './App.css'

function App() {
  return (
    <div className="app">
      <AddTodo/>
      <TodoList/>
      <FilterTodo/>
    </div>
  );
}

export default App;
