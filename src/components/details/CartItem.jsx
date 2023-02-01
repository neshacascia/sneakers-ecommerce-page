import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { sneakersImagesArr } from '../../pages/sneakersImagesData';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

export default function CartItem(props) {
  const cartContext = useContext(CartContext);

  return (
    <li>
      <div className="flex items-center p-6">
        <img
          src={sneakersImagesArr[0]}
          className="w-cartItem h-cartItem rounded mr-4"
        />

        <div className="font-display font-normal mr-auto">
          <span>{props.name}</span>
          <div>
            <span className="pr-4">{`$${props.price}.00 x ${props.amount}`}</span>
            <span className="font-bold">{`$${
              props.price * props.amount
            }.00`}</span>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faPlus}
          className="text-grey hover:text-orange-500 mr-4"
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faMinus}
          className="text-grey hover:text-orange-500 mr-4"
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-grey hover:text-orange-500"
        ></FontAwesomeIcon>
      </div>
    </li>
  );
}
