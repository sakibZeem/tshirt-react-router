import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Review Orders</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Header;