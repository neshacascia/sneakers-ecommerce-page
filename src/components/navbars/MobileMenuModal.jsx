import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { navbarArr } from './navbarData';

import closeBtn from '/assets/icon-close.svg';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  const navbarLinks = navbarArr.map(item => (
    <li key={item.id}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ));

  return (
    <div>
      <button onClick={closeModal}>
        <img src={closeBtn} />
      </button>

      <ul>{navbarLinks}</ul>
    </div>
  );
}
