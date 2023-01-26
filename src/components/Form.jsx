export default function Form() {
  return (
    <form className="flex flex-col items-center">
      <div className="bg-gray-100 w-full h-14 flex justify-between items-center rounded-lg px-6">
        <button className="text-orange-500 font-bold text-xl">-</button>
        <input
          className="bg-gray-100 text-center font-bold"
          type="number"
          min="0"
        />
        <button className="text-orange-500 font-bold text-xl">+</button>
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
