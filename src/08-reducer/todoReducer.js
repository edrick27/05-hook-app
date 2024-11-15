export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'Add Todo':
            return [action.payload, ...initialState];
            break;

        case 'Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);
            break;

        case 'Mark Done':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
            break;

        default:
            return initialState;
    
    }

}