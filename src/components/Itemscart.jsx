// Itemscart.jsx
// Componente de presentación para cada producto que se añade al carrito.

import { useCart } from "../context/CartContext.jsx";
import "../sass/myCartStyle.scss"

export const ItemsCart = () => {
  const { state, removeItem, increment, decrement } = useCart();

  return (
    <div>
      {state.items.map(item => (
        <div className="container_cart" key={item.cartItemId}>
          <img src={item.imageUrl} alt={item.nombre} height="100" width="100" />
          <h4>{item.nombre}</h4>
          <p>{item.descripcion}</p>
        <div className="button_cart">
          <button onClick={() => increment(item.cartItemId)}>➕</button>
          <p className="cantidad-cart">{item.cantidad}</p>
          <button onClick={() => decrement(item.cartItemId)}>➖</button>
        </div>

          {/* Muestra el precio formateado según la convención argentina */}
          <p className="precio_cart">
            {(item.cantidad * item.precio).toLocaleString("es-AR")} {item.divisa}
          </p>

          <button className="button_cart_x" onClick={() => removeItem(item.cartItemId)}>❌</button>
        </div>
      ))}
    </div>
  );
};