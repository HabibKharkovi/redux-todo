import React from 'react';
import { connect } from 'react-redux';
import { handleClick } from '../actions';


const Todo = ({text, completed, onClick}) => {
  return ( 
    <li onClick={onClick} style={{textDecoration: completed ? "line-through" : "none"}}>{text}</li>
   );
}

const TodoList = ({todos, handleClick}) => {
  console.log(todos)
  return ( 
    <ul>
      {todos.map(todo =>
         <Todo key={todo.id} {...todo} onClick={() => handleClick(todo.id)}/>  
      )}
    </ul>
   );
}

const mapDispatchToState = dispatch => ({
  handleClick: id => dispatch(handleClick(id)) 
})

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToState)(TodoList);

