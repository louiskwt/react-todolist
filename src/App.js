import React, { useState, useEffect } from "react";
import './App.css';
import Form from'./components/Form';
import TodoList from './components/TodoList';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [id, setId] = useState('');


  // Run get local storage once when the app get started
  useEffect(() => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let storedTodo = JSON.parse(localStorage.getItem('todos'));
      
      setTodos(storedTodo);
    }
  }, [])

  // Use effect
  useEffect(() => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break 
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);
  

  return (
    <div className="App">
      <header>
        <h1>Louis's Todo List </h1>
      </header>
      <Form inputText={inputText} id={id} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setId={setId} setTodos={setTodos} setInputText={setInputText} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
