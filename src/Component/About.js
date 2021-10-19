import React from 'react';

function About() {
    return (
        <>

            <section id="about" className="about">
                <div className="about-container">
                    <div className="about-main">
                        <h2>About Us.</h2>
                        <p>
                            At Mykroft Tech, we believe in the power of ideas. 
                            We are based in Enugu, but we work with clients 
                            worldwide. We thrive on making a difference
                            to brands and helping companies 
                            make powerful audience connections.
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="grid grid-1">
                            <div className="grid-wrapper">
                                <div className="icon">
                                    <i className="fas fa-5x fa-globe"></i>
                                </div>
                                <h2>We Listen</h2>
                                <p>
                                    We pay attention to you to better understand 
                                    what your project is all about.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-2">
                            <div className="grid-wrapper">
                                <div className="icon">
                                    <i className="fas fa-5x fa-chart-pie"></i>
                                </div>
                                <h2>Analyse</h2>
                                <p>
                                    Our team of experts analyse your projects 
                                    using various techniques and tools .
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-3">
                            <div className="grid-wrapper">
                                <div className="icon">
                                    <i className="fas fa-5x fa-tasks"></i>
                                </div>
                                <h2>Execute</h2>
                                <p>
                                    We execute our plan for the project after
                                    proper analysis
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-4">
                            <div className="grid-wrapper">
                                <div className="icon">
                                    <i className="fas fa-5x fa-project-diagram"></i>
                                </div>
                                <h2>Support</h2>
                                <p>
                                    We provide support from marketing to technical
                                    areas to help you focus on what is important
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        </>
    )
}

export default About
