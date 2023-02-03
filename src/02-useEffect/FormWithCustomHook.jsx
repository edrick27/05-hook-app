import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, inputChange, onResetForm, username, email, password } = useForm({
        username: 'Edrick',
        email: 'edricklpcr@gmail.com',
        password: ''
    });

    // const { username, email, password } = formState;


    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={inputChange}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="edrick@gmail.com"
                name="email"
                value={email}
                onChange={inputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="******"
                name="password"
                value={password}
                onChange={inputChange}
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
            {
                username === 'Edrick2' ? <Message /> : null
            }
        </>
    )
}
