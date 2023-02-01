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
          <h1 className="text-lg text-right pr-6 mb-2">
            Total: ${cart.getTotalCost().toFixed(2)}
          </h1>
        </>
      ) : (
        <div className="h-full flex justify-center items-center">
          <p className=" text-navGray px-6">Your cart is empty.</p>
        </div>
      )}
    </>
  );
}
