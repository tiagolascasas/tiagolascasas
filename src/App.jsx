import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Publications from './pages/Publications';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="publications" element={<Publications />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
