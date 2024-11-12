
const inicialState = [{
    id: 1,
    todo: 'Comprar sandalias',
    done: false,
}];

const todoReducer = ( state = inicialState, action = {} ) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload]
            break;
    }
    
    return state;
}

const newTodo = {
    id: 3,
    todo: 'Comprar Harina',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo 
}



let todos = todoReducer();
 todos = todoReducer(todos, addTodoAction);
console.log(todos);