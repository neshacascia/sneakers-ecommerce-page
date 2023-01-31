import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import { navbarArr } from './navbarData';

import hamburgerMenu from '/assets/icon-menu.svg';
import logo from '/assets/logo.svg';
import iconCart from '/assets/icon-cart.svg';

export default function Navbar() {
  const { openModal, openCart } = useContext(Context);

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

      <ul className="hidden font-display text-navGray block lg:flex items-center gap-8 mr-auto">
        {navLinks}
      </ul>

      <button onClick={openCart}>
        <img src={iconCart} />
      </button>
    </nav>
  );
}
