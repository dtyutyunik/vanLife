import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
    <header>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
      </nav>  
    </header> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      {/* <div className="App">

        </div> */}
    </Routes>
    </>
  );
}

export default App;
