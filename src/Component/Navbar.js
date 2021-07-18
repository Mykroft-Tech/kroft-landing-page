import React, {useState} from 'react';
import logo from '../Assets/Img/Logo.png';
import { Link as Lk } from 'react-router-dom';
// import {Link} from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }
    return (
        <>
            <nav className="navbar">
                <div>
                    <Lk to="/">
                        <img src={logo} alt="" />
                    </Lk>
                </div>
                {/* <i class="fas fa-bars"></i> */}
                {/* <i class="fas fa-times"></i> */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-2x fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li>
                        <Lk className="current" to="/" onClick={closeMobileMenu}>
                            Home
                        </Lk>
                    </li>
                    <li>
                        <Lk to="about" onClick={closeMobileMenu}>
                            About Us
                        </Lk>
                    </li>
                    <li>
                        <Lk to="services" onClick={closeMobileMenu}>
                            Services
                        </Lk>
                    </li>
                    <Lk className="nav-button" onClick={closeMobileMenu} to="/contact">
                        Contact Us
                    </Lk>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
