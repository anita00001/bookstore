import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
