import { useCounter, useFetch } from "../hooks/"
import { ListItems } from "./ListItems";
import { Loading } from "./Loading";

export const MultipleCustomHooks = () => {


    const { counter, increment, decrement } = useCounter(1);

    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);

    const { id, name, sprites } = !!data && data;


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? <Loading/> : <ListItems id={id} name={name} sprites={sprites}/>
            }
            <div className="container">
                <div class="row">
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
