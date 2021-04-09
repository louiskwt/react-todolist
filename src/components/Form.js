import React from 'react';

const Form = ({ inputText, setInputText, setTodos, todos, setStatus, id}) => {
    // Here: write javascript code and function to handle state
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !== '' && id === '') {
            // Add Todo
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
        } else if(inputText !== '' && id) {
            // Update Todo
            setTodos(todos.filter(todo => {
                if(todo.id === id) {
                    todo.text = inputText;
                }
                return [
                    ...todos, todo
                ]
            }))
        } else {
            // Prevent Empty todo
            alert('Please Enter Something')
        }

        setInputText('');

    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <div className="form-input">
                <input type="hidden" className="todo-input" value={id}/>
                <input name="todo" type="text" value={inputText} className="todo-input" onChange={inputTextHandler} required />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

export default Form;