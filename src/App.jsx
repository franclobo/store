import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header';
import { Carrito } from './components/carrito';
import { Pages } from './components/pages';
import { DataProvider } from './context/dataprovider';
import './index.css';

function App() {

  return (
    <>
      <DataProvider>
      <div className="App">
            <Router>
              <Header />
              <Carrito />
              <Pages />
            </Router>
      </div>
      </DataProvider>
    </>
  )
}

export default App
