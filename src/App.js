import Menu from './components/Menu/menu.js';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>

        <main>
          <Rotas />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
