import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from './context/Context';
import Home from './pages/Home';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import './App.css';

function App() {
  const { toggleMenu } = useContext(Context);

  return (
    <div className="App">
      <Home />

      {toggleMenu &&
        ReactDOM.createPortal(
          <MobileMenuModal />,
          document.getElementById('modal-root')
        )}
    </div>
  );
}

export default App;
