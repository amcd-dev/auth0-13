import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Unprotected from './pages/Unprotected';
import Protected from './pages/Protected';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unprotected" element={<Unprotected />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
