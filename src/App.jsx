import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogue from './pages/Catalogue';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
