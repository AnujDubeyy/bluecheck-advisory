import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        e.currentTarget.style.setProperty('--mouse-x', x);
        e.currentTarget.style.setProperty('--mouse-y', y);
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    };

    return (
        <div className="contact-modern" onMouseMove={handleMouseMove}>
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    className="text-center mb-12"
                >
                    <h1 className="display-heading">Contact Us</h1>
                    <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.2rem' }}>
                        We welcome enquiries from individuals and businesses seeking structured and compliant advisory support.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-card-glass"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                >
                    <div className="contact-info-item">
                        <h4>Registered Office</h4>
                        <p>[To be inserted as per MCA records]</p>
                    </div>

                    <div className="contact-info-item">
                        <h4>Email</h4>
                        <p><a href="mailto:info@bluecheckadvisory.in" className="contact-link">info@bluecheckadvisory.in</a></p>
                    </div>

                    <div className="contact-info-item">
                        <h4>Phone</h4>
                        <p>[To be inserted]</p>
                    </div>
                </motion.div>

                <motion.div
                    className="legal-section-glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
                >
                    <div className="legal-block">
                        <h5>Terms & Legal</h5>
                        <p>
                            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal, financial, or professional advice. Specific advice should be sought based on individual facts and circumstances.
                        </p>
                        <p>
                            <strong>Confidentiality:</strong> All client information shared with BlueCheck Advisory is treated as confidential and handled with professional care.
                        </p>
                        <p>
                            <strong>Governing Law:</strong> This website and all engagements of BlueCheck Advisory are governed by the laws of India.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
