import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-page" style={{ paddingTop: '100px' }}>
            <div className="container about-content">
                <motion.section
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>About Us</h1>

                    <div className="about-block">
                        <h3>Our Firm</h3>
                        <p>
                            BlueCheck Advisory is a limited liability partnership registered in India and governed by the provisions of the Limited Liability Partnership Act, 2008. The firm has been established to provide consulting and advisory services in a structured and compliant manner.
                        </p>
                        <p>
                            We work with startups, SMEs, professionals, and family businesses who value long term thinking, compliance discipline, and clarity in execution.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="about-block">
                        <h3>Our Philosophy</h3>
                        <p>
                            We believe that good consulting is not about complexity. It is about understanding the client’s context, identifying risks early, and providing solutions that are practical, lawful, and sustainable.
                        </p>
                        <p>Our advisory philosophy is built on three pillars:</p>
                        <div className="philosophy-grid">
                            <motion.div className="philosophy-card" whileHover={{ y: -5 }}>
                                <h4>Compliance first mindset</h4>
                            </motion.div>
                            <motion.div className="philosophy-card" whileHover={{ y: -5 }}>
                                <h4>Commercial practicality</h4>
                            </motion.div>
                            <motion.div className="philosophy-card" whileHover={{ y: -5 }}>
                                <h4>Long term relationship focus</h4>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Our Values</h3>
                    <div className="values-grid">
                        <div className="value-card">
                            <h4>Integrity in advice and action</h4>
                        </div>
                        <div className="value-card">
                            <h4>Confidentiality of client information</h4>
                        </div>
                        <div className="value-card">
                            <h4>Professional discipline</h4>
                        </div>
                        <div className="value-card">
                            <h4>Respect for Indian business culture and ethics</h4>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
