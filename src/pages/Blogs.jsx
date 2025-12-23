import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
    return (
        <div className="blogs-page" style={{ height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="section-title" style={{ marginBottom: '20px', fontSize: '3.5rem' }}>Coming Soon</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '500px', margin: '0 auto' }}>
                        We are crafting insightful articles and updates on the latest in cybersecurity and compliance. Stay tuned.
                    </p>
                </motion.div>

                <motion.div
                    style={{ marginTop: '40px' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', margin: '0 auto' }}></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Blogs;
