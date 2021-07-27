import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Vision() {
    return (
        <>
            <section className="vision">
                <div className="vision-wrapper">
                    <div className="vision-bg">
                        <h2 className="vision-text">Our Vision</h2>
                    </div>

                    <div className="vision-info">
                        <div>
                            <p>
                                To become the most reliable and trusted agency 
                                for all tech and digital solutions.
                            </p>
                            <Link className="vision-cta" smooth to="#contact">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Vision
