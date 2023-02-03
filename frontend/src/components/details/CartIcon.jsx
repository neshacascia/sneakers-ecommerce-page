import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

export default function CartIcon() {
  const cart = useContext(CartContext);

  const totalItems = cart.items.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <div className="w-cartIcon bg-orange-500 rounded-md z-10 absolute flex justify-center items-center left-4 bottom-4 select-none">
      <span className="text-white text-xs text-center">{totalItems}</span>
    </div>
  );
}
