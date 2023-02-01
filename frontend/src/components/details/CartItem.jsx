import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { getProductData } from '../../sneakersData';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem(props) {
  const cart = useContext(CartContext);

  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <li>
      <div className="flex items-center p-6">
        <img
          src={productData.thumbnail}
          className="w-cartItem h-cartItem rounded mr-4"
        />

        <div className="font-display font-normal mr-auto">
          <span>{productData.name}</span>
          <div>
            <span className="pr-4">{`$${productData.price.toFixed(
              2
            )} x ${quantity}`}</span>
            <span className="font-bold">{`$${
              quantity * productData.price.toFixed(2)
            }`}</span>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faPlus}
          className="text-grey hover:text-orange-500 mr-4"
          onClick={() => cart.addOneItem(props.id)}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faMinus}
          className="text-grey hover:text-orange-500 mr-4"
          onClick={() => cart.removeOneItem(props.id)}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-grey hover:text-orange-500"
          onClick={() => cart.deleteItem(props.id)}
        ></FontAwesomeIcon>
      </div>
    </li>
  );
}
