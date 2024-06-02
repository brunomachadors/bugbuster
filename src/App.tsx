import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';
import NotFound from './pages/NotFound'; // Importe o componente NotFound

function App() {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastPage', location.pathname);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router basename="/bugbuster">
      <App />
    </Router>
  );
}

export default AppWrapper;
