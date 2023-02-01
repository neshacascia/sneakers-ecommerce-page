import { useContext } from 'react';
import CartItem from './CartItem';

import CartContext from '../../context/CartContext';

export default function Cart() {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <>
      {cartContext.items.length > 0 ? (
        cartItems
      ) : (
        <p className="text-center text-navGray px-6 pt-20">
          Your cart is empty.
        </p>
      )}
    </>
  );
}
