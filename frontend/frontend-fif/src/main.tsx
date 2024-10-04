import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Ww2 from "./pages/games/Ww2"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/game/ww2' element={<Ww2/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
