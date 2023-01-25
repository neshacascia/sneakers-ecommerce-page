import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from './context/Context';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import './App.css';
import Navbar from './components/navbars/Navbar';

function App() {
  const { toggleMenu } = useContext(Context);

  return (
    <div className="App">
      <Navbar />

      {toggleMenu &&
        ReactDOM.createPortal(
          <MobileMenuModal />,
          document.getElementById('modal-root')
        )}
    </div>
  );
}

export default App;
