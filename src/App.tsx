import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';
import OurServices from './pages/OurServices';
import Contact from './pages/Contact';
import MediumFeed from './pages/Medium';
import MediumPostPage from './components/Medium';

function App() {
  return (
    <Router basename="/bugbuster">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medium" element={<MediumFeed />} />
        <Route path="/medium/:id" element={<MediumPostPage />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
