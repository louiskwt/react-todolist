import React from 'react'

const Todo = ({text, setTodos, setId, todos, todo, setInputText}) => {
    // Events
    const deleteHandler = () => {
        console.log(todo);
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    const setEditState = () => {
        setInputText(todo.text);
        setId(todo.id);
    }

    return(
        <div className="todo">
            <li onDoubleClick={completeHandler} className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={setEditState} className='edit-btn' ><i className="fas fa-edit"></i></button>
            <button onClick={deleteHandler} className='trash-btn' ><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo