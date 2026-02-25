// SearchProductPage.jsx
// Página que permite buscar un producto por palabras clave.

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductTagsContext } from "../context/ProductTagsContext";
import { useTagFilter } from "../hooks/useTagsFilter";
import { ImageCard } from "../components/ImageCard";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dropboxlinks } from "../utils/dropboxlinks";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';


const SearchProductPage = () => {
    const { productos } = useContext(ProductTagsContext);
    const { filtrados, buscarPorTags } = useTagFilter(productos);
    const [query, setQuery] = useState("");

    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get("query") || "";
        setQuery(q);
        buscarPorTags(q);
    }, [location.search]);

    return (
        <>
            <Link to="/"><HomeSharpIcon fontSize='large' color='action' /></Link>
            <Header />
            <div>
                {!query ? (
                    <h2>No se encontró nada</h2>
                ) : filtrados.length === 0 ? (
                    <p>No hay productos con esos tags.</p>
                ) : (
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {filtrados.map((p) => (
                            <ImageCard
                                key={p.ProductId}
                                {...p}
                                imageUrl={dropboxlinks(p.imageUrl)}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchProductPage;