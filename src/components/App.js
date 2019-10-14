import React from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';
import FilterTodo from './FilterTodo';
import './App.css'

function App() {
  return (
    <div className="app">
      <AddTodo/>
      <ListTodo/>
      <FilterTodo/>
    </div>
  );
}

export default App;
