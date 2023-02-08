import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";


const heavyStuff = (iterationNumber = 100) => {

    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos...");
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemorizeHook = () => {

    const { counter, increment } = useCounter(4000);

    const [Show, setShow] = useState(true);

    const memorizedVAlue  = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter <small>{counter}</small></h1>

            <h4>{memorizedVAlue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}>
                +1
            </button>

            <button
                className="btn btn-info"
                onClick={() => {
                    setShow(!Show);
                }}>
                Show/Hide {JSON.stringify(Show)}
            </button>
        </>
    )
}
