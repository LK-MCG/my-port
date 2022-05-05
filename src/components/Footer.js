import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLindedin } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ContactUs from './ContactUs.js'

const Footer = () => {
    return(
        <div id="footer-contain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 mt-5">
                        <h1>Lets' Connect</h1>
                        <div className="d-flex mt-3">
                            <div id="s-icon-one">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </div>
                            <div id="s-icon-two">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div id="s-icon-three">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div id="s-icon-four">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                        <hr />
                        <ul className="navbar-nav me-auto m-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                            <a className="nav-link active" id="footer-nav" aria-current="page" href="#header-contain">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="footer-nav" href="#tech-contain">Tech Journey</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="footer-nav" aria-current="page" href="#about-contain">About Me</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="footer-nav" aria-current="page" href="#project-contain">My Projects</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="footer-nav" aria-current="page" href="#footer-contain">Contact</a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                    <ContactUs />
                    {/* <div className="col-md-6 col-12">
                        <div>
                            <div className="container mt-5 mb-5 p-4" id="contact-port">
                            <h1>Contact Me</h1>
                            <form className="row g-3">
                                <div>
                                    <label for="firstName" className="form-label mt-3">First Name:</label>
                                    <input type="text" className="form-control" placeholder='name' id="firstName" name="user_name" />
                                    <label for="email" className="form-label mt-3">Email:</label>
                                    <input className="col-12" placeholder='email' id="email" name="user_email" />
                                    <textarea placeholder='message me here' className="mt-3 col-12"  rows="10" cols="20" name="message" />
                                    <input type="submit" value="send" className="col-sm-6 btn-primary mt-3 mb-5" />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div> */}
                </div>
                <hr />
                <div className="d-flex justify-content-center mb-3 mt-4" id="footer-copy">
                    <div>
                        <span className=''>Created by L Mcgovern</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer