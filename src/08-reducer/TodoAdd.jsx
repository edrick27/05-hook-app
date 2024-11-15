import { useState } from 'react'

export const TodoAdd = ({ onAddTodo }) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setInputValue('');

        const newTodo = {
            id: new Date().getTime(),
            description: inputValue.trim(),
            done: false
        };

        onAddTodo(newTodo);
    }

    return (
        <form action="" onSubmit={ handleSubmit }>
            <input type="text"
                placeholder='Qué hay que hacer?'
                className='form-control'
                value={inputValue}
                onChange={onChange}
            />
            <button type='submit'
                className='btn btn-outline-primary mt-1'>
                Agregar
            </button>
        </form>
    )
}
