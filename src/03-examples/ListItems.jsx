
export const ListItems = ({name, id, sprites}) => {
    return (
        <blockquote className="blockquote text-center">
            <img src={sprites.front_default} height='150' />
            <p className="mb-1">{id}</p>
            <h3>{name}</h3>
        </blockquote>
    )
}
