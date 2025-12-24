import React from 'react';
import { motion } from 'framer-motion';

import './Blogs.css';

const Blogs = () => {
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        e.currentTarget.style.setProperty('--mouse-x', x);
        e.currentTarget.style.setProperty('--mouse-y', y);
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    };

    return (
        <div className="blogs-modern" onMouseMove={handleMouseMove}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    className="blogs-content-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <h1 className="display-heading">Coming Soon</h1>
                    <p className="blogs-text">
                        We are crafting insightful articles and updates on the latest in cybersecurity and compliance. Stay tuned.
                    </p>

                    <motion.div
                        style={{ marginTop: '0' }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div className="pulsing-dot"></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Blogs;
