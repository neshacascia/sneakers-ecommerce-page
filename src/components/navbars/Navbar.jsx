import { useContext } from 'react';
import { Context } from '../../context/Context';

import hamburgerMenu from '/assets/icon-menu.svg';
import iconCart from '/assets/icon-cart.svg';

export default function Navbar() {
  const { openModal } = useContext(Context);

  return (
    <nav>
      <button onClick={openModal}>
        <img src={hamburgerMenu} />
      </button>

      <h1>sneakers</h1>

      <button onClick={openModal}>
        <img src={iconCart} />
      </button>
    </nav>
  );
}
