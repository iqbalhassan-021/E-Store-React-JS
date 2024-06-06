import React from 'react';

const Footer = () => {
  return (
    <>
                <div className="footer">
                    <div className="cover">
                        <div className="footer-section">
                            <div className="qucik-links">
                                <h3>Quick Links</h3>
                                <br/>
                                <a href="#" className="no-decoration navLink">
                                    <p>
                                        About
                                    </p>
                                </a>
                                <br/>
                                <a href="#" className="no-decoration navLink">
                                    <p>
                                        Contact
                                    </p>
                                </a>
                                <br/>
                                <a href="#" className="no-decoration navLink">
                                    <p>
                                        Products
                                    </p>
                                </a>
                                <br/>
                                <a href="#" className="no-decoration navLink">
                                    <p>
                                        Create your Store
                                    </p>
                                </a>
                                <br/>
                                <a href="#" className="no-decoration navLink">
                                    <p>
                                        Admin
                                    </p>
                                </a>
                            </div>
                            <div className="contact-details">
                                <h3>Contact Details</h3>
                                <br/>
                                <p>
                                    <strong>Email: </strong> <a href="mailto:hassan.ashfaq82@gmail.com" className="no-decoration">hassan.ashfaq82@gmail.com</a>
                                </p>
                                <br/>
                                <p>
                                    <strong>Contact no: </strong> <a href="tel:03121798713" className="no-decoration">03121798713</a>
                                </p>
                                <br/>
                                <p>
                                    <strong>Address: </strong> Street NO# 3 Muhala Rehamtabad Gujrat Punjab Paksitan
                                </p>
                                <br/>
                                <p>
                                    <strong>Trading Hours</strong>
                                    <br/>
                                    Mon-Sat 10:00 am to 8pm <br/>
                            
                                    Sunday OFF

                                </p>
                            </div>
                        </div>
                        <div className="newsleter">
                            <div className="subsriber-section">
                                Subscribe now to receive exclusive special offers.
                                <p style={{opacity: '0%'}}>--</p>
                                <form action="#" className="subscribe">
                                    <input type="email" name="email" placeholder="Email " required   id="sub"/>
                                    <button type="submit" className="primary-button sub">Subscribe</button>
                                </form>
                            </div>
                            <div className="instalink">
                                <a href="#" className="no-decoration navLink">
                                    <i className="fa-brands fa-instagram navLink"></i>
                                </a>
                                <a href="#" className="no-decoration" style={{ marginLeft: '10px' }}>
                                    <i className="fa-sharp fa-solid fa-arrow-up fa-bounce"></i>
                                </a>
                            </div>
                        </div>
                        <div className="copyright">
                            @Copyright 2024 all rights reserved. <a href="#" className="no-decoration">isha_prints</a>
                        </div>
                    </div>
                </div>
    </>
  );
};

export default Footer;
