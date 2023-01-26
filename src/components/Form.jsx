export default function Form() {
  return (
    <form className="flex flex-col items-center">
      <div className="pb-6">
        <button>-</button>
        <input type="number" min="0" />
        <button>+</button>
      </div>
      <button type="submit">Add to cart</button>
    </form>
  );
}
