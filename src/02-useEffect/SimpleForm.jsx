import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Edrick',
        email: 'edricklpcr@gmail.com'
    })

    const { username, email } = formState;

    const inputChange = ({ target }) => {

        const {name, value} = target;

        setformState({
            ...formState,
            [name]: value
        });
    }


    useEffect(() => {
        // este callback se llama cada vez se renderiza el componente
        // console.log('##### useEffect #####')
    }, [])

    useEffect(() => {
        // console.log('formstate change!!')
    }, [formState])

    useEffect(() => {
        // console.log('email change!!')
    }, [email])
    


    return (
        <>
            <h1>Formulario Simple</h1>
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

            { 
                username === 'Edrick2' ? <Message/> : null
            }
        </>
    )
}
