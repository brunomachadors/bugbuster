import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mentors from './pages/Mentors';
import OurServices from './pages/OurServices';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import PostPage from './pages/Post';
import MediumFeed from './pages/Medium';
import MediumPostPage from './components/Medium';

function App() {
  // Forçamos o uso de 'useParams()' apenas uma vez para resolver o problema do ESLint.
  const params = useParams();

  return (
    <Router basename="/bugbuster">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts title="PUBLICAÇÕES" />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/medium" element={<MediumFeed />} />

        <Route
          path="/medium/:id"
          element={
            params.id !== undefined ? (
              <MediumPostPage id={params.id} />
            ) : (
              <div>Post não encontrado</div>
            )
          }
        />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
