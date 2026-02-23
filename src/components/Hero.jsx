import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1,
                    top: '20%',
                    left: '30%',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--primary)', marginBottom: '10px' }}>
                    Hi, I'm V Kaushika
                </h2>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px' }}>
                    B.Tech Computer Science Student
                </h1>
                <h2 style={{ fontSize: '2rem', fontWeight: 600, minHeight: '3rem' }}>
                    <span className="text-gradient">
                        <Typewriter
                            words={['Aspiring Software Developer 🚀', 'Problem Solver', 'MERN Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p style={{
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '20px auto',
                    fontSize: '1.1rem'
                }}>
                    I build solutions through code and continuously improve my problem-solving skills.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-outline">Contact Me</a>
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ position: 'absolute', bottom: '30px', cursor: 'pointer', color: 'var(--text-muted)' }}
                onClick={() => document.getElementById('about').scrollIntoView()}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
