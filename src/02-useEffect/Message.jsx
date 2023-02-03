import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            const coords = {x, y};
            console.log(coords);
        }

        // monted del component
        window.addEventListener('mousemove', onMouseMove);
    
      return () => {
        // unmonted del component
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe!</h3>
        </>
    )
}
