import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <a href="/" className="nav-item">Home</a>
                <a href="/orders" className="nav-item">Orders</a>
                <a href="/integrations" className="nav-item">Integrations</a>
                <a href="/tracking" className="nav-item">Tracking Page</a>
                <a href="/partner" className="nav-item">Partner with Us</a>
            </div>
            <div className="navbar-right">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <a href="/account" className="nav-item">
                    <i className="fas fa-user"></i> Account
                </a>
                <a href="/settings" className="nav-item">
                    <i className="fas fa-cog"></i> Settings
                </a>
                
            </div>
        </div>
    );
};

export default Navbar;
