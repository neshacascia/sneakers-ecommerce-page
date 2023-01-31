import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from './context/Context';
import Home from './pages/Home';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import ImageModal from './components/modals/ImageModal';
import './App.css';
import CartModal from './components/modals/CartModal';

function App() {
  const { toggleMenu, imageGallery, isCartOpen } = useContext(Context);

  return (
    <div className="App">
      <Home />

      {toggleMenu &&
        ReactDOM.createPortal(
          <MobileMenuModal />,
          document.getElementById('modal-root')
        )}

      {imageGallery &&
        ReactDOM.createPortal(
          <ImageModal />,
          document.getElementById('image-modal-root')
        )}

      {isCartOpen &&
        ReactDOM.createPortal(
          <CartModal />,
          document.getElementById('cart-modal-root')
        )}
    </div>
  );
}

export default App;
