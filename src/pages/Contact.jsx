import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1>Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        We welcome enquiries from individuals and businesses seeking structured and compliant advisory support.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="contact-info-item">
                        <h4>Registered Office</h4>
                        <p>[To be inserted as per MCA records]</p>
                    </div>

                    <div className="contact-info-item">
                        <h4>Email</h4>
                        <p><a href="mailto:info@bluecheckadvisory.in" className="text-blue-500 hover:underline">info@bluecheckadvisory.in</a></p>
                    </div>

                    <div className="contact-info-item">
                        <h4>Phone</h4>
                        <p>[To be inserted]</p>
                    </div>
                </motion.div>

                <motion.div
                    className="legal-section-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="legal-block">
                        <h5>Terms & Legal</h5>
                        <p>
                            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal, financial, or professional advice. Specific advice should be sought based on individual facts and circumstances.
                        </p>
                        <p style={{ marginTop: '10px' }}>
                            <strong>Confidentiality:</strong> All client information shared with BlueCheck Advisory is treated as confidential and handled with professional care.
                        </p>
                        <p style={{ marginTop: '10px' }}>
                            <strong>Governing Law:</strong> This website and all engagements of BlueCheck Advisory are governed by the laws of India.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
