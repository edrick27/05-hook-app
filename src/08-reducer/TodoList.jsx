import React from 'react'
import { TodoItem } from './TodoItem'


export const TodoList = ({ todos, onDeleteTodo, onMarkDone }) => {


  return (
    <div>
        {
            todos.map((todo, index) => (
                <TodoItem 
                  key={ todo.id } 
                  todo={todo} 
                  onDeleteTodo= { onDeleteTodo } 
                  onMarkDone= { onMarkDone } 
                />
            ))
        }
    </div>
  )
}
