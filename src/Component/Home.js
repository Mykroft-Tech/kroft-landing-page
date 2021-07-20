import React, { useState, useEffect } from 'react';
import About from './About';
import Services from './Services';
import Vision from './Vision';

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <header
                id="home"
                
                >
                <h1>
                    We turn ideas 
                    <br/> into successful products.
                </h1>
                <p>
                    If you’re on the hunt for a professional
                    Website Development Firm with loads of experience,
                    you’ve come to the right place.
                </p>
                <a className="home-cta" href="/contact">
                    Contact Us
                </a>
            </header>

            < About  style={ {transform: `translateY(${offsetY * 0.3}px)`} } />
            < Services />
            < Vision />
        </>
    )
}

export default Home
