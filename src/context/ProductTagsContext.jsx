import { createContext, useState, useEffect } from "react";
import data from "../db.json"; // ajustá la ruta según tu estructura

export const ProductTagsContext = createContext();

export const ProductTagsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // tu JSON tiene "products", así que accedemos a esa propiedad
    setProductos(data.products || []);
  }, []);

  return (
    <ProductTagsContext.Provider value={{ productos }}>
      {children}
    </ProductTagsContext.Provider>
  );
};