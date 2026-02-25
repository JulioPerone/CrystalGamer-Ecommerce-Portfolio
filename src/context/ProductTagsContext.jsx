// ProductTagsContext.jsx
// Contexto para búsqueda por palabras clave.

import { createContext, useState, useEffect } from "react";
import data from "../db.json";

export const ProductTagsContext = createContext();

export const ProductTagsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(data.products || []);
  }, []);

  return (
    <ProductTagsContext.Provider value={{ productos }}>
      {children}
    </ProductTagsContext.Provider>
  );
};