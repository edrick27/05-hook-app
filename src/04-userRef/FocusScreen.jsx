import { useRef } from "react";

export const FocusScreen = () => {


    const ref = useRef();

    const onClick = () => {
        ref.current.select();
    }

    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
                ref={ ref}
            />            


            <button className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                Set focus
            </button>
        </>
    )
}
