import { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function openModal() {
    setToggleMenu(true);
  }

  function closeModal() {
    setToggleMenu(false);
  }

  return (
    <Context.Provider
      value={{ toggleMenu, setToggleMenu, openModal, closeModal }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
