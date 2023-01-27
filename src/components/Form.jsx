import { useState } from 'react';

export default function Form() {
  const [quantity, setQuantity] = useState(0);

  function inputChangeHandler(e) {
    setQuantity(e.target.value);
  }

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
        >
          -
        </button>
        <input
          className="bg-gray-100 text-center font-bold"
          type="number"
          min="0"
          value={quantity}
          onChange={inputChangeHandler}
        />
        <button
          className="text-orange-500 font-bold text-xl"
          type="button"
          onClick={addQuantity}
        >
          +
        </button>
      </div>
      <button
        className="bg-orange-500 font-display font-bold text-white w-full h-14 rounded-lg shadow-orange-200 shadow-lg mt-6"
        type="submit"
      >
        Add to cart
      </button>
    </form>
  );
}
