import React from 'react';
import logo from '../Assets/Img/mykroftlogo.png';

function Footer() {
    return (
        <>
            <footer>
                <div className="foot footer-details">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <p>+2348 060 485 509</p>
                        <p>info@mykroft.tech</p>
                        <p>1A, Ihiala City Layout, Upper Chime
                            Avenue,
                        </p>
                        <p>New Haven, Enugu.</p>
                    </div>
                </div>

                <div className="foot footer-contact">
                    <p>
                        Subscribe to our newsletter
                    </p>
                    <form action="">
                        <label htmlFor=""email>
                            Email *
                        </label>
                        <input className="mail" type="email"/>
                        <input className="submit" type="submit"/>
                    </form>
                </div>

                <div className="foot footer-socials">
                    <div>
                        <p>Follow Us On:</p>
                        <div className="footer-icon">
                            <i className="fab fa-2x fa-facebook"></i>
                            <i className="fab fa-2x fa-twitter"></i>
                        </div>
                    </div>
                    <p>&copy; 2021 by MyKroft Tech.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
