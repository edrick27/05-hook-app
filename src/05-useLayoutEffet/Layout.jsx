import { useCounter, useFetch } from "../hooks/"
import { ListItems } from "../03-examples/ListItems";
import { Loading } from "../03-examples/Loading";

export const Layout = () => {


    const { counter, increment, decrement } = useCounter(1);

    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);

    const { id, name, sprites } = !!data && data;

    const moves = !!data && data.moves.map((item) => { return item.move.name});


    return (
        <>
            <h1>PokeDex</h1>
            <hr />

            {
                isLoading ? <Loading/> : <ListItems id={id} name={name} sprites={sprites} moves={moves}/>
            }
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={() => decrement(1)}>
                            anterior
                        </button>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={() => increment(1)}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
