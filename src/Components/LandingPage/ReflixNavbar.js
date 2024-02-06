import React from 'react';
import './ReflixNavbar.css';
import { Link } from 'react-router-dom'
import { ReflixLogo } from './ReflixLogo.js';

export function ReflexNavbar() {
    
  return (
    <nav className="navbar">
        <Link to="/"><div className="navbar-link">Home</div></Link>
        <Link to="/catalog"><div className="navbar-link">Catalog</div></Link>
    </nav>
  );
}
