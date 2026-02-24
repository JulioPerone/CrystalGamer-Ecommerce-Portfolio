//este fue el sistema basico, archivo reemplazado por la version 2 -> useShowProductV2
import { useEffect, useState } from 'react';

export const useShowProduct = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

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

    return { data, isLoading, error };
};