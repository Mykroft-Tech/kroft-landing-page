import React from 'react';

function Services() {
    return (
        <>
            <section className="services">
                <h1 className="service-title">Our Services</h1>
                <div className="services-wrapper">
                    <div className="service service-one">
                        <div className="service-icon">
                            <i class="fas fa-5x fa-laptop-code"></i>
                        </div>
                        <div className="service-info">
                            <h2>
                                Website Design and Development
                            </h2>
                            <p>
                                At Mykroft Tech, we provide a wide range of design 
                                services to transform your vision into reality. 
                                Above all, we develop an engaging visual story to 
                                make your product or business 
                                stand out from the crowd.
                            </p>
                        </div>
                    </div>

                    <div className="service service-two">
                        <div className="service-icon">
                            <i class="fas fa-6x fa-mobile-alt"></i>
                        </div>
                        <div className="service-info">
                            <h2>
                                Mobile Application Development
                            </h2>
                            <p>
                            Whether you’re looking for an expert to 
                            add a finishing touch to your mobile app,
                            or are looking to build one from scratch — 
                            Mykroft Tech is the go-to source for all 
                            your mobile development needs. Contact us today 
                            and see what we can do for you.
                            </p>
                        </div>
                    </div>

                    <div className="service service-three">
                        <div className="service-icon">
                            <i class="fas fa-5x fa-poll"></i>
                        </div>
                        <div className="service-info">
                            <h2>
                                Digital Marketing
                            </h2>
                            <p>
                            We’re passionate about helping brands
                            find their creative voice. We aim to help
                            our clients thrive in a changing omni-channel
                            world and leverage their unique strengths to 
                            build a personalized roadmap to success. 
                            We’re here to make your life easier — 
                            talk to us about how we can help.
                            </p>
                        </div>
                    </div>

                    <div className="service service-four">
                        <div className="service-icon">
                            <i class="fas fa-5x fa-chalkboard-teacher"></i>
                        </div>
                        <div className="service-info">
                            <h2>
                                Training
                            </h2>
                            <p>
                            We offer a personalized learning 
                            experience designed to accommodate viewers 
                            of all levels; from beginners to seasoned experts. 
                            We empower our community to learn at their own 
                            pace whenever it’s convenient. Contact us to find out 
                            more some of the courses we offer
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
