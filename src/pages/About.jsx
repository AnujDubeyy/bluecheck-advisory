import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        e.currentTarget.style.setProperty('--mouse-x', x);
        e.currentTarget.style.setProperty('--mouse-y', y);
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    };

    return (
        <div className="about-modern" onMouseMove={handleMouseMove}>
            <div className="container about-content">
                <motion.section
                    className="about-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <h1 className="display-heading">About Us</h1>

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
                    className="about-section philosophy-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <div className="about-block">
                        <h3 className="section-subheading">Our Philosophy</h3>
                        <p className="philosophy-intro">
                            We believe that good consulting is not about complexity. It is about understanding the client’s context, identifying risks early, and providing solutions that are practical, lawful, and sustainable.
                        </p>
                        <p className="philosophy-intro">Our advisory philosophy is built on three pillars:</p>
                        <div className="philosophy-grid">
                            <motion.div className="philosophy-card modern-glass" whileHover={{ scale: 1.05 }}>
                                <h4>Compliance first mindset</h4>
                            </motion.div>
                            <motion.div className="philosophy-card modern-glass" whileHover={{ scale: 1.05 }}>
                                <h4>Commercial practicality</h4>
                            </motion.div>
                            <motion.div className="philosophy-card modern-glass" whileHover={{ scale: 1.05 }}>
                                <h4>Long term relationship focus</h4>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="about-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <h3 className="section-subheading">Our Values</h3>
                    <div className="values-grid">
                        <motion.div className="value-card modern-glass" whileHover={{ scale: 1.03 }}>
                            <h4>Integrity in advice and action</h4>
                        </motion.div>
                        <motion.div className="value-card modern-glass" whileHover={{ scale: 1.03 }}>
                            <h4>Confidentiality of client information</h4>
                        </motion.div>
                        <motion.div className="value-card modern-glass" whileHover={{ scale: 1.03 }}>
                            <h4>Professional discipline</h4>
                        </motion.div>
                        <motion.div className="value-card modern-glass" whileHover={{ scale: 1.03 }}>
                            <h4>Respect for Indian business culture and ethics</h4>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
