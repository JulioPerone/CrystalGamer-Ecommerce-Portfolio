import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import AllProductPage from "../pages/AllProductPage";
import Register from "../pages/Register";
import MyCartPage from "../pages/MyCartPage";
import SearchProductPage from "../pages/SearchProductPage";
import Login from "../pages/Login";

const RoutesLinks = [
    { id: 1, path:"/", element:<HomePage /> },
    { id: 2, path:"/Productos", element:<AllProductPage /> },
    { id: 3, path:"/Registrame", element:<Register />},
    { id: 4, path:"/Carrito", element:<MyCartPage />},
    { id: 5, path:"/ProductosTags", element:<SearchProductPage />},
    { id: 6, path:"/Login", element:<Login />},

];

export const AllRoutes = () => {
  return (
    <Routes>
        {RoutesLinks.map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />
        })}
    </Routes>
  )
}
