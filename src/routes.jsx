import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './pages/Layout';
import Home from './pages/home/home';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
