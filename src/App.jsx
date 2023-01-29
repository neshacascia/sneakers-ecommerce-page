import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from './context/Context';
import Home from './pages/Home';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import ImageModal from './components/modals/ImageModal';
import './App.css';

function App() {
  const { toggleMenu, imageGallery } = useContext(Context);

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
    </div>
  );
}

export default App;
