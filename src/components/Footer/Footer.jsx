import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Soban <span>Shoaiby</span></h2>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <p>New Delhi-110030</p>
                        <p>+91-9729729161</p>
                        <p>sobanshoaiby@gmail.com</p>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Me</h3>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/soban-shoaiby-developer" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin />
                            </a>
                            <a href="mailto:sobanshoaiby@gmail.com">
                                <FiMail />
                            </a>
                            <a href="https://github.com/sobanshoaiby" target="_blank" rel="noopener noreferrer">
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Md Soban Shoaiby. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
