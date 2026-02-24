import { useContext } from "react";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { ProductTagsProvider } from "./context/ProductTagsContext";
import { AllRoutes } from "./routes/AllRoutes";

export const App = () => {
  return (
    //Es como el cerebro que conecta las rutas y cualquier lógica global (contextos, providers, etc.).
    <ThemeContextProvider>
      <CartProvider>
        <ProductTagsProvider>
          <AppContent />
        </ProductTagsProvider>
      </CartProvider>
    </ThemeContextProvider>
  );
};

const AppContent = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`app ${mode}`}>
      <AllRoutes />
    </div>
  );
};

export default App;