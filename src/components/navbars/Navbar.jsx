import { useContext } from 'react';
import { Context } from '../../context/Context';

import hamburgerMenu from '/assets/icon-menu.svg';
import logo from '/assets/logo.svg';
import iconCart from '/assets/icon-cart.svg';

export default function Navbar() {
  const { openModal } = useContext(Context);

  return (
    <nav className="h-20 bg-white flex items-center px-6">
      <button onClick={openModal} className="m-4">
        <img src={hamburgerMenu} />
      </button>

      <img src={logo} className="mr-auto" />

      <button onClick={openModal}>
        <img src={iconCart} />
      </button>
    </nav>
  );
}
