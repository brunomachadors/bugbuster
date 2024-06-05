import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';
import OurServices from './pages/OurServices';

function App() {
  return (
    <Router basename="/bugbuster">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/mentors" element={<Mentors />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
