import './Navbar.css';
import Logo from './assets/Logo.JPG';
import React from 'react';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
            <img src={Logo} alt="Logo" className="navbar__Logo" />
                <h1 className="navbar__title days-one-regular navbar__title--larger">Astro Team</h1>
            </div>
            <div className="navbar__center">
                <button className="navbar__button days-one-regular">About Project</button>
                <button className="navbar__button days-one-regular">Team</button>
                <button className="navbar__button days-one-regular">Form</button>
                <button className="navbar__button days-one-regular">Footer</button>
            </div>
            <div className="navbar__right">
                <button className="navbar__button days-one-regular">Contact Us</button>
            </div>
        </nav>
    );
}

export default Navbar;