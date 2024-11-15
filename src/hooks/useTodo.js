import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-reducer/todoReducer';


export const useTodo = ({ initialState, init }) => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onAddNewTodo = (newTodo) => {

        const action = {
            type: 'Add Todo',
            payload: newTodo
        };

        dispatchTodo(action);

    }

    const onDeleteTodo = (todoId) => {

        const action = {
            type: 'Delete Todo',
            payload: todoId
        };

        dispatchTodo(action);
    }

    const onMarkDone = (todoId) => {

        const action = {
            type: 'Mark Done',
            payload: todoId
        };

        dispatchTodo(action);
    }

    const getPendingTodos = () => {
        
        const listPending = todos.filter(todo => !todo.done);
        
        return listPending.length;
    }

    return {
        todos,
        onAddNewTodo,
        onDeleteTodo,
        onMarkDone,
        getPendingTodos
    }
}
