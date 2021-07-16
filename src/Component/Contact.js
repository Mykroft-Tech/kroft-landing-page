import React from 'react';

function Contact() {
    return (
        <>
            
            <section className="contact">
                <div className="contact-wrapper">
                    <div className="contact-bg">
                        <h1>Get Started</h1>
                        <p>
                            Let’s give your business what it needs to grow.
                        </p>
                    </div>

                    <div className="contact-flexed">
                        <div className="contact-flex-one">
                            <h1>
                                Contact
                            </h1>
                        </div>

                        <div className="contact-flex-two">
                            <form action="">
                                <div className="contact-grid">
                                    <div>
                                        <label htmlFor="Fname">
                                            First Name
                                        </label>
                                        <input type="text"/>
                                    </div>

                                    <div>
                                        <label htmlFor="Lname">
                                            Last Name
                                        </label>
                                        <input type="text"/>
                                    </div>

                                    <div>
                                        <label htmlFor="Fname">
                                            Email *
                                        </label>
                                        <input type="email"/>
                                    </div>

                                    <div>
                                        <label htmlFor="Fname">
                                            Company
                                        </label>
                                        <input type="text"/>
                                    </div>

                                    <div>
                                        <label htmlFor="Fname">
                                            Phone
                                        </label>
                                        <input type="tel"/>
                                    </div>

                                    <div>
                                        <label htmlFor="Fname">
                                            Job Title
                                        </label>
                                        <input type="text"/>
                                    </div>
                                    <div>
                                        <input className="contact-submit" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Contact
