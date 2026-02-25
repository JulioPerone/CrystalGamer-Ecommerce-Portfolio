// AllProductPage.jsx
// Página para mostrar todos los productos filtrando categorías y subcategorías.

import { useState, useEffect } from 'react';
import { dropboxlinks } from "../utils/dropboxlinks";
import { useShowProductV2 } from "../hooks/useShowProductV2";
import ImageCard from '../components/ImageCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const AllProductPage = () => {
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState("");
    const [scId, setScId] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(json => setCategories(json));
    }, []);

    const { data, isLoading, error } = useShowProductV2(
        "http://localhost:3000/products",
        catId,
        scId
    );

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Header />

            <div style={{ margin: "1rem" }}>
                <label>Categoría: </label>
                <select value={catId} onChange={(e) => {
                    setCatId(e.target.value);
                    setScId("");
                }}>
                    <option value="">Todas</option>
                    {categories.map(cat => (
                        <option key={cat.catId} value={cat.catId}>
                            {cat.nombre}
                        </option>
                    ))}
                </select>

                <label style={{ marginLeft: "1rem" }}>Subcategoría: </label>
                <select value={scId} onChange={(e) => setScId(e.target.value)}>
                    <option value="">Todas</option>
                    {catId && categories.find(c => c.catId == catId)?.subcategories.map(sc => (
                        <option key={sc.scId} value={sc.scId}>
                            {sc.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {data.map((item) => (
                    <li key={item.ProductId} style={{ listStyle: 'none' }}>
                        <ImageCard
                            nombre={item.nombre}
                            descripcion={item.descripcion}
                            precio={item.precio}
                            divisa={item.divisa}
                            imageUrl={dropboxlinks(item.imageUrl)}
                        />
                    </li>
                ))}
            </ul>

            <Footer />
        </>
    )
}

export default AllProductPage;