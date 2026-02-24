import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { formatPrecio } from "../utils/formatPrecio.js";
import "../sass/checkoutButton.scss";

export const CheckoutButton = () => {
    const { getTotal, state } = useCart();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleCheckout = () => {
        setLoading(true);
        setDone(false);

        setTimeout(() => {
            setLoading(false);
            setDone(true);
        }, 2000);
    };

    return (
        <div className="checkout-container">
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? "Procesando..." : "Checkout"}
            </button>

            {loading && <div className="spinner"></div>}

            {done && (
                <p className="done-message">
                    ✅ ¡Compra confirmada! Total: {formatPrecio(getTotal(), state.items[0]?.divisa)}
                </p>
            )}
        </div>
    );
};