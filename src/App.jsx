import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Research from './pages/Research';
import About from './pages/About';
import Asterinix from './pages/Asterinix';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="cv" element={<CV />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="projects/asterinix" element={<Asterinix />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/asterinix" element={<Navigate to="/projects/asterinix" replace />} />
          <Route path="asterinix" element={<Navigate to="/projects/asterinix" replace />} />
          <Route path="publications" element={<Research />} />
          <Route path="research" element={<Research />} />
          <Route path="blog" element={<Navigate to="/about" replace />} />
          <Route path="blog/*" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
