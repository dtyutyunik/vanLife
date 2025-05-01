import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails.jsx';
import "./server.js";

function App() {

  return (
    <>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
    </>
  );
}

export default App;
