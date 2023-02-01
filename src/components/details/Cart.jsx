import { useContext } from 'react';
import CartItem from './CartItem';

import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const cart = useContext(CartContext);

  const cartItems = (
    <ul>
      {cart.items.map(item => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
    </ul>
  );

  return (
    <>
      {cart.items.length > 0 ? (
        <>
          {cartItems}
          <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
        </>
      ) : (
        <p className="text-center text-navGray px-6 pt-20">
          Your cart is empty.
        </p>
      )}
    </>
  );
}
