import React from 'react';
import About from './About';
import Services from './Services';
import Vision from './Vision';

function Home() {
    return (
        <>
            <header>
                <h1>
                    We turn ideas 
                    <br/> into successful products.
                </h1>
                <p>
                    If you’re on the hunt for a professional
                    Website Development Firm with loads of experience,
                    you’ve come to the right place.
                </p>
                <a className="home-cta" href="#">
                    Contact Us
                </a>
            </header>

            < About />
            < Services />
            < Vision />
        </>
    )
}

export default Home
