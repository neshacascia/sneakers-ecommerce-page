import { useState } from 'react';

export default function Form() {
  const [quantity, setQuantity] = useState(0);

  const disableMinusBtn = quantity === 0;
  const disablePlusBtn = quantity === 10;
  const quantityIsNotValid = quantity < 0;

  function addQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function minusQuantity() {
    setQuantity(prevQuantity => prevQuantity - 1);
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <div className="bg-gray-100 w-full h-14 flex justify-between items-center rounded-lg px-6">
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
      {quantityIsNotValid && (
        <p className="text-red-500 font-display text-sm pt-6">
          Quantity must be greater than or equal to 0
        </p>
      )}
      <button
        className="bg-orange-500 font-display font-bold text-white w-full h-14 rounded-lg shadow-orange-200 shadow-lg mt-6"
        type="submit"
      >
        Add to cart
      </button>
    </form>
  );
}
