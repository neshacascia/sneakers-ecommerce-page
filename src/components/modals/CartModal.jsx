import Cart from '../details/Cart';

export default function CartModal() {
  return (
    <div className="w-screen flex justify-center lg:justify-end">
      <div className="bg-white font-display font-bold w-cart h-cart flex flex-col rounded-xl mt-24 shadow-cart fixed z-10 lg:mr-24">
        <span className="px-6 my-6">Cart</span>
        <hr />
        <Cart />
      </div>
    </div>
  );
}
