import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1>BlueCheck Advisory</h1>
                        <p>
                            BlueCheck Advisory is a professional consulting firm focused on delivering structured, compliant, and practical advisory solutions to businesses, professionals, and family owned enterprises in India. We combine regulatory awareness with commercial understanding to help clients take informed decisions with confidence.
                        </p>
                        <p className="mt-4">
                            Our approach is grounded, transparent, and aligned with Indian business realities. We believe in clarity over jargon and solutions that work on paper as well as on ground.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <Link to="/contact" className="btn">Get in Touch</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="section-title">What We Do</h2>
                    <motion.div
                        className="feature-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <h3>Business Structuring</h3>
                            <p>We support clients in defining the right structure for their business operations.</p>
                        </motion.div>
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <h3>Compliance Advisory</h3>
                            <p>Ensuring your business meets all regulatory requirements seamlessly.</p>
                        </motion.div>
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <h3>Governance Frameworks</h3>
                            <p>Establishing robust frameworks for effective management and oversight.</p>
                        </motion.div>
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <h3>Operational Consulting</h3>
                            <p>Services designed to reduce risk, improve efficiency, and enable sustainable growth.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="why-section">
                <div className="container">
                    <h2 className="section-title">Why BlueCheck</h2>
                    <motion.div
                        className="why-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div className="why-item feature-card" variants={fadeInUp}>
                            <h4>India Focused</h4>
                            <p>Advisory approach tailored for the Indian market.</p>
                        </motion.div>
                        <motion.div className="why-item feature-card" variants={fadeInUp}>
                            <h4>Regulatory Expert</h4>
                            <p>Strong understanding of regulatory frameworks.</p>
                        </motion.div>
                        <motion.div className="why-item feature-card" variants={fadeInUp}>
                            <h4>Practical Solutions</h4>
                            <p>Implementation friendly solutions that work.</p>
                        </motion.div>
                        <motion.div className="why-item feature-card" variants={fadeInUp}>
                            <h4>Professional Conduct</h4>
                            <p>Ethical, confidential, and disciplined approach.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
