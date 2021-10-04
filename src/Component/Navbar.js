import React, {useState} from 'react';
import logo from '../Assets/Img/mykroftlogo.png';
import { Link as Lk } from 'react-router-dom';
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
            <nav className="navbar">
                <div>
                    <Link smooth to="#home">
                        <img src={logo} alt="" />
                    </Link>
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
                    <Link className="nav-button" onClick={closeMobileMenu} smooth to="/#contact">
                        Contact Us
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
