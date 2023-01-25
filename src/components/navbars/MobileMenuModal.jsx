import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

import closeBtn from '/assets/icon-close.svg';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  return (
    <div>
      <button onClick={closeModal}>
        <img src={closeBtn} />
      </button>

      <ul>
        <li>
          <Link to="#">Collections</Link>
        </li>
        <li>
          <Link to="#">Men</Link>
        </li>
        <li>
          <Link to="#">Women</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
