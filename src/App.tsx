import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';

function App() {
  return (
    <Router basename="/bugbuster">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/mentors" element={<Mentors></Mentors>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
