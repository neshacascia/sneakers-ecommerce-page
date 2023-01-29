import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import { navbarArr } from './navbarData';

import hamburgerMenu from '/assets/icon-menu.svg';
import logo from '/assets/logo.svg';
import iconCart from '/assets/icon-cart.svg';

export default function Navbar() {
  const { openModal } = useContext(Context);

  const navLinks = navbarArr.map(nav => (
    <li key={nav.id}>
      <NavLink to="/#">{nav.name}</NavLink>
    </li>
  ));

  return (
    <nav className="h-20 bg-white flex items-center px-6">
      <button onClick={openModal} className="m-4 md:hidden">
        <img src={hamburgerMenu} />
      </button>

      <img src={logo} className="mr-auto md:mr-14" />

      <ul className="hidden font-display text-navGray block md:flex items-center gap-8 mr-auto">
        {navLinks}
      </ul>

      <button onClick={openModal}>
        <img src={iconCart} />
      </button>
    </nav>
  );
}
