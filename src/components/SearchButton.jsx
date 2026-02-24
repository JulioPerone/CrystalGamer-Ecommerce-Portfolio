import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchButton = ({ onSearch }) => {
    const [buscando, setBuscando] = useState("");
    const navigate = useNavigate();

    const handlerBusqueda = (e) => {
        setBuscando(e.target.value);
    };

    const ejecutarBusqueda = () => {
        if (typeof onSearch === "function") {
            onSearch(buscando);
        }
        // Redirige a la página de búsqueda con el query como parámetro
        navigate(`/ProductosTags?query=${encodeURIComponent(buscando)}`);
    };

    return (
        <>
            <input
                id="Buscar"
                type="search"
                value={buscando}
                placeholder="Buscar producto..."
                onChange={handlerBusqueda}
            />
            <button onClick={ejecutarBusqueda}>Buscar</button>
        </>
    );
};