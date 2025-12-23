import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3 className="footer-logo">BlueCheck Advisory</h3>
                    <p className="footer-text">
                        Designed for clarity, compliance, and confidence in Indian business advisory.
                    </p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} BlueCheck Advisory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
