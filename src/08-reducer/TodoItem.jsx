import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onMarkDone }) => {

    const handleDelete = (e) => {
        e.preventDefault();

        const todoId = todo.id;
        onDeleteTodo(todoId);
    }

    const handleMarkDone = (e) => {
        e.preventDefault();

        const todoId = todo.id;
        onMarkDone(todoId);
    }

    return (
        <div className='card p-3 mt-4' onDoubleClick={ handleMarkDone }>
            <h5 className={`card-title  ${todo.done && 'text-decoration-line-through'}`}>
                {todo.description}
            </h5>
            <p className='card-text'>{todo.done ? 'Terminado' : 'Pendiente'}</p>
            <button 
                className='btn btn-danger'
                onClick={handleDelete}>
                Borrar
            </button>
        </div>
    )
}
