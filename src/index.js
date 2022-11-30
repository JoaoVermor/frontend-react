import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Component1 from './Component1';
import './UsuariosTabela';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Usuarios from './Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Menu />
  <Routes>
<Route path="/" element={<App />} />
<Route path="users" element={<Component1 />} />
<Route path="about" element={<About />} />
<Route path="pessoas" element={<Usuarios/>}/>
</Routes>

  </BrowserRouter>
);
