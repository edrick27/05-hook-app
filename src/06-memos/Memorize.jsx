import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(2);

    const [Show, setShow] = useState(true)

    return (
        <>
            <h1>Counter <Small value={counter} /></h1>

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
