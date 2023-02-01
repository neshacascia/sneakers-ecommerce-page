import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Form(props) {
  const cartContext = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const disableMinusBtn = quantity === 0;
  const disablePlusBtn = quantity === 10;

  function addQuantity() {
    setIsTouched(true);
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function minusQuantity() {
    setQuantity(prevQuantity => prevQuantity - 1);
  }

  function addToCartHandler(e) {
    e.preventDefault();
    setIsTouched(false);
    setIsAdded(true);

    if (quantity !== 0) {
      cartContext.addItem({
        id: props.id,
        name: props.name,
        amount: quantity,
        price: props.price,
      });
    }
  }

  return (
    <>
      <form
        className="flex flex-col items-center h-auto xl:flex-row xl:gap-4"
        onSubmit={addToCartHandler}
      >
        <div className="bg-gray-100 w-full h-14 flex justify-between items-center rounded-lg px-6 xl:w-quantity">
          <button
            className="text-orange-500 font-bold text-xl"
            type="button"
            onClick={minusQuantity}
            disabled={disableMinusBtn}
          >
            -
          </button>
          <input
            className="bg-gray-100 text-center font-bold"
            type="number"
            min="0"
            max="10"
            value={quantity}
            disabled
          />
          <button
            className="text-orange-500 font-bold text-xl"
            type="button"
            onClick={addQuantity}
            disabled={disablePlusBtn}
          >
            +
          </button>
        </div>
        {isAdded && !isTouched && quantity === 0 && (
          <p className="text-red-500 font-display text-sm pt-6 xl:hidden">
            Quantity needs to be greater than 0.
          </p>
        )}

        <button
          className="bg-orange-500 font-display font-bold text-white w-full h-14 rounded-lg shadow-orange-200 shadow-lg mt-6 xl:mt-0"
          type="submit"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="pr-4"
          ></FontAwesomeIcon>
          Add to cart
        </button>
      </form>

      {isAdded && !isTouched && quantity === 0 && (
        <p className="hidden xl:block text-red-500 font-display text-sm pt-6 text-center">
          Quantity needs to be greater than 0.
        </p>
      )}
    </>
  );
}
