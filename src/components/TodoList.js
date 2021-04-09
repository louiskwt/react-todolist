import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos, setId, setInputText, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setInputText={setInputText} setId={setId} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} todos={todos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;