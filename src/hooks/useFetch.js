import { useEffect, useState } from "react";

const localCache = {


};


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
        // setTimeout(() => {  getFetch(); }, 1000);
    }, [url])


    const setLoadingState = () => {

        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async () => {

        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false
            });
            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    status: resp.status,
                    statusText: !resp.statusText ? 'Ocurrio un error' : resp.statusText
                }
            });
            return;
        }

        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: false
        });

        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
