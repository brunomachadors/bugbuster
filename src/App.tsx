import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';
import OurServices from './pages/OurServices';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import PostPage from './pages/Post';

function App() {
  return (
    <Router basename="/bugbuster">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts title="PUBLICAÇÕES" />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
