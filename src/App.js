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


  // function
  const filterHandler = () => {
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
  }

  // Run get local storage once when the app get started
  useEffect(() => {
    getLocalTodos();
  }, [])

  // User effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }


  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let storedTodo = JSON.parse(localStorage.getItem('todos'));
      
      setTodos(storedTodo);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Louis's Todo List </h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
