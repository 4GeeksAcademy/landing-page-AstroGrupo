import './Navbar.css';
import Logo from '../../assets/logo.jpg';
import React from 'react';


export const Navbar = () => {
    return (
        <div className='navbar__container'>
            <nav className="navbar">
                <div className="navbar__left">
                    <img src={Logo} alt="Logo" className="navbar__Logo" />
                    
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
        </div>
    );
}

export default Navbar;