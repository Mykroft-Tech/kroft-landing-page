import React from 'react';
import logo from '../Assets/Img/Logo.png';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link className="current" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={1000}>About Us</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={1000}>Services</Link>
                    </li>
                    <Link className="nav-button" to="/contact">
                        Contact Us
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
