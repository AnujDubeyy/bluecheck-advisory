import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoLight from '../assets/logo-bg.png';
import logoDark from '../assets/logo-dark.png';
import { useTheme } from '../context/ThemeContext';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const location = useLocation();
    const { theme } = useTheme();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const logoSymbol = theme === 'dark' ? logoDark : logoLight;

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logoSymbol} alt="BlueCheck Advisory" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className={isActive('/')}>Home</Link></li>
                <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
                <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
                <li><Link to="/blogs" className={isActive('/blogs')}>Blogs</Link></li>
                <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
                <li><ThemeToggle /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
