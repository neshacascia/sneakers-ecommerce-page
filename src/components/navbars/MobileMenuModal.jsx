import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { navbarArr } from './navbarData';

import closeBtn from '/assets/icon-close.svg';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  const navbarLinks = navbarArr.map(item => (
    <li key={item.id}>
      <Link to={item.path} className="hover:text-orange-500">
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="bg-gray-100 h-screen w-7/12 fixed z-10 p-6">
      <button className="mb-12" onClick={closeModal}>
        <img src={closeBtn} />
      </button>

      <ul className="text-dark font-display font-bold text-lg flex flex-col gap-5">
        {navbarLinks}
      </ul>
    </div>
  );
}
