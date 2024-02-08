import React from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";
import Layout from './components/Layout';
import Host from './pages/Host';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './index.css';

const App = () => {
   const active = {
      fontWeight: 'bold',
      textDecoration: 'underline'
   }
   return (
      <BrowserRouter>
         <header style={{ background: '#000', color:'#fff'}}>
            <h3 style={{ background: '#000', color: '#fff'}}>Firebase</h3>
            <nav style={{ background: '#000', color: '#fff'}}>
               <NavLink style={({ isActive}) => isActive ? active : null} to={'/'}>Home</NavLink>
               <NavLink style={({ isActive }) => isActive ? active : null} to={'/register'}>Sign Up</NavLink>
               <NavLink style={({ isActive }) => isActive ? active : null}>Login</NavLink>
               <NavLink style={({ isActive }) => isActive ? active : null} to={'/host'}>Host</NavLink>
            </nav>
         </header>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<LoginScreen />} />
            <Route path="/host" element={<Host />} />
         </Routes>
      </BrowserRouter>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);