// useLoginUser.js
// Custom hook que permite hacer login comparando con la información consultada de la base de datos.

import { useEffect, useState } from 'react';

export const useLoginUser = (url = "http://localhost:3000/users") => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setError(null);

        fetch(url, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error("Error en la respuesta");
                return response.json();
            })
            .then((json) => {
                setData(json);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setIsLoading(false);
                }
            });

        return () => controller.abort();
    }, [url]);

    return { 
        data,       //informacion consultada
        isLoading,  //estado de carga
        error       //mensaje de error en caso de falla
    };
};