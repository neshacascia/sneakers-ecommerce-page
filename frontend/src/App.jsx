import { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartProvider from './context/CartContext';
import {
  createBrowserRouter,
  MemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { Context } from './context/Context';
import Root from './pages/Root';
import Home from './pages/Home';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import ImageModal from './components/modals/ImageModal';
import './App.css';
import CartModal from './components/modals/CartModal';
import Success from './pages/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'success', element: <Success /> },
    ],
  },
]);

function App() {
  const { toggleMenu, imageGallery, isCartOpen } = useContext(Context);

  return (
    <CartProvider>
      <RouterProvider router={router} />

      {toggleMenu &&
        ReactDOM.createPortal(
          <MemoryRouter>
            <MobileMenuModal />{' '}
          </MemoryRouter>,
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
    </CartProvider>
  );
}

export default App;
