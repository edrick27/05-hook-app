import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const { todos, onAddNewTodo, onDeleteTodo, onMarkDone, getPendingTodos } = useTodo({ initialState: [], init });

  return (
    <>
      <h1>TodoApp ({ todos.length }), <small>pendientes { getPendingTodos() }</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onMarkDone={onMarkDone}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODOD</h4>
          <hr />
          <TodoAdd onAddTodo={onAddNewTodo} />
        </div>
      </div>
    </>
  )
}
