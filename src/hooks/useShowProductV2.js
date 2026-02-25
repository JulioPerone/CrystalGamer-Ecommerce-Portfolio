// useShowProductV2.js
// Custom hook que permite consultar la información de cada producto por categoría y subcategoría.

import { useEffect, useState } from 'react';

export const useShowProductV2 = (baseUrl, catId = "", scId = "") => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!baseUrl) return;

        const controller = new AbortController();
        setError(null);

        let url = baseUrl;
        if (catId) url += `?catId=${catId}`;
        if (scId) url += catId ? `&scId=${scId}` : `?scId=${scId}`;

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
    }, [baseUrl, catId, scId]);

    return { 
        data,       //datos de cada producto 
        isLoading,  //estado y control de carga
        error       //mensaje de error en caso de falla
    };
};