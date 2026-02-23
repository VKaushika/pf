import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>About <span className="text-gradient">Me</span></h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--gradient-main)', margin: '15px auto', borderRadius: '2px' }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '50px',
                alignItems: 'center'
            }}>
                {/* Left Side - Image Placeholder / Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        height: '400px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'linear-gradient(225deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            background: 'var(--gradient-main)',
                            margin: '0 auto 20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '4rem'
                        }}>
                            VK
                        </div>
                        <h3 style={{ fontWeight: 600 }}>V Kaushika</h3>
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '20px' }}>
                        I am a second-year B.Tech Computer Science student at <strong>NIST University (2024–2028)</strong> with a strong interest in software development and problem-solving. I am currently building my foundation in programming and data structures and enjoy learning by developing real-world projects.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '30px' }}>
                        I am passionate about improving my technical skills and actively seeking opportunities to gain practical experience and contribute to meaningful software solutions.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="glass" style={{ padding: '15px', textAlign: 'center' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>University</h4>
                            <p>NIST University</p>
                        </div>
                        <div className="glass" style={{ padding: '15px', textAlign: 'center' }}>
                            <h4 style={{ color: 'var(--secondary)', marginBottom: '5px' }}>Major</h4>
                            <p>Computer Science</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
