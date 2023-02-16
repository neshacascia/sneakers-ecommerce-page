import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../details/Cart';

export default function CartModal() {
  const cart = useContext(CartContext);

  async function checkout() {
    await fetch('https://fancy-erin-panama-hat.cyclic.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.url) {
          window.location.assign(res.url);
        }
      });
  }

  return (
    <div className="w-screen flex justify-center lg:justify-end">
      <div className="bg-white font-display font-bold w-cart h-cart flex flex-col rounded-xl mt-24 shadow-cart fixed z-10 lg:mr-24">
        <span className="px-6 my-6">Cart</span>
        <hr />
        <Cart />
        {cart.items.length > 0 && (
          <button
            className="bg-orange-500 font-display font-bold text-white  h-14 rounded-lg shadow-orange-200 shadow-lg mt-2 mx-6"
            onClick={checkout}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
