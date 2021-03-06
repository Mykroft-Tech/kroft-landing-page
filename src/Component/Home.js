import React from 'react';
import About from './About';
import Services from './Services';
import Vision from './Vision';
import Contact from './Contact';

function Home() {

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

            < About />
            < Services />
            < Vision />
            < Contact />
        </>
    )
}

export default Home
