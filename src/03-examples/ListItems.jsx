import { useLayoutEffect, useRef, useState } from "react"

export const ListItems = ({ name, id, sprites, moves }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {

        const { height, width } = pRef.current.getBoundingClientRect();
        console.log(height, width);
        setBoxSize({ height, width })

    }, [])

    return (
        <>
            <blockquote className="blockquote text-center">
                <img src={sprites.front_default} height='150' />
                <p className="mb-1">{id}</p>
                <h3>{name}</h3>
                <div style={{ display: 'flex' }}
                    ref={pRef}
                >
                    <p>{moves}</p>
                </div>
            </blockquote>
            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
