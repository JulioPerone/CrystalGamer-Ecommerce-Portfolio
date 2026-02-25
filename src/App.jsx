//App.jsx
//Es el cerebro de mi aplicacion, renderiza contexto y providers.

import { useContext } from "react";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { ProductTagsProvider } from "./context/ProductTagsContext";
import { AllRoutes } from "./routes/AllRoutes";

export const App = () => {
  return (
    <ThemeContextProvider>
      <CartProvider>
        <ProductTagsProvider>
          <AppContent />
        </ProductTagsProvider>
      </CartProvider>
    </ThemeContextProvider>
  );
};

// Configuracion para que cada ruta sea afectada por el modo del tema claro/oscuro
const AppContent = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`app ${mode}`}>
      <AllRoutes />
    </div>
  );
};

export default App;