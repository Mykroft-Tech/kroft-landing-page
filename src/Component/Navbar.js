import React, {useState} from 'react';
import logo from '../Assets/Img/Logo.png';
import { Link as Lk } from 'react-router-dom';
// import { Link } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';

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
            <nav id="home" className="navbar">
                <div>
                    <Lk to="/">
                        <img src={logo} alt="" />
                    </Lk>
                </div>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-2x fa-times': 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li>
                        <Link
                            smooth to="/#home"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>      
                    </li> 

                    <li>
                        <Link
                            smooth to="/#about"
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>    
                    </li>

                    <li>
                        <Link
                            smooth to="/#services" 
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>    
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
