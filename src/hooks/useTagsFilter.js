// useTagFilter.js
// Custom hook que permite filtrar los resultados por palabras clave.

import { useState } from "react";

export const useTagFilter = (productos) => {
    const [filtrados, setFiltrados] = useState([]);

    const buscarPorTags = (input) => {
        if (!input || !Array.isArray(productos)) {
            setFiltrados([]);
            return;
        }

        const tagsBuscados = input.toLowerCase().split(" ");

        const resultado = productos.filter((p) =>
            tagsBuscados.some((tag) =>
                p.tags.some((t) => t.toLowerCase().includes(tag))
            )
        );

        setFiltrados(resultado);
    };

    return { filtrados, buscarPorTags };
};

export default useTagFilter;