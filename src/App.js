// import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

