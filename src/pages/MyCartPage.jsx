import { formatPrecio } from '../utils/formatPrecio.js';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { ItemsCart } from "../components/Itemscart.jsx";
import { CheckoutButton } from '../components/CheckoutButton.jsx';
import { SeguirComprando } from '../components/SeguirComprando.jsx';

export const MyCartPageDemo = () => {
    const { state, getTotal } = useCart();

    return (
        <>
            <Link to="/"><HomeSharpIcon fontSize='large' color='action' /></Link>
            <h1>Mi carrito</h1>
            <div className="item-list">
                {state.items.length === 0 ? (
                    <p>Tu carrito esta vacio 🥺</p>
                ) : (
                    <ItemsCart />
                )}
            </div>
            <hr />
            <h3 className="total-carrito">
                Total del carrito: {formatPrecio(getTotal(), state.items[0]?.divisa)}
            </h3>
            <div className="botton-actions">
                <CheckoutButton />
                <SeguirComprando />
            </div>
        </>
    )
}

export default MyCartPageDemo;