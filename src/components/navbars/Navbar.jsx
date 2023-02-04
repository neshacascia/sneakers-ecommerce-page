import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import { navbarArr } from './navbarData';
import { CartContext } from '../../context/CartContext';
import CartIcon from '../details/CartIcon';

import hamburgerMenu from '/assets/icon-menu.svg';
import logo from '/assets/logo.svg';
import iconCart from '/assets/icon-cart.svg';

export default function Navbar() {
  const { openModal, openCart } = useContext(Context);
  const cart = useContext(CartContext);

  const navLinks = navbarArr.map(nav => (
    <li key={nav.id} className="hover:text-orange-500">
      <NavLink to="/#">{nav.name}</NavLink>
    </li>
  ));

  return (
    <nav className="h-20 bg-white flex items-center px-6 lg:h-28 lg:px-40">
      <button onClick={openModal} className="m-4 lg:hidden">
        <img src={hamburgerMenu} />
      </button>

      <img src={logo} className="mr-auto lg:mr-14" />

      <ul className="hidden font-display text-navGray lg:flex items-center gap-8 mr-auto">
        {navLinks}
      </ul>

      <div className="relative">
        {cart.items.length > 0 && <CartIcon />}

        <button onClick={openCart} className="relative">
          <img src={iconCart} />
        </button>
      </div>
    </nav>
  );
}
