import { NavLink } from 'react-router-dom';
import React from 'react';

export const Navbar = () => (
  <nav>
    <NavLink exact={true} to="/">
      Main
    </NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/logout">Logout</NavLink>
  </nav>
);
