import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   const active =  {
      fontWeight: '700',
      textDecoration: 'underline',
   };

   return (
      <header style={{ background: '#000'}}>
         <h1>Firebase</h1>
         <nav>
            <NavLink style={({ isActive}) => isActive ? active : null}>Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? active : null}>Sign Up</NavLink>
            <NavLink style={({ isActive }) => isActive ? active : null}>Login</NavLink>
         </nav>
      </header>
   );
};

export default Header;