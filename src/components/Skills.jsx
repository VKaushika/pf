import React from 'react';
import { motion } from 'framer-motion';

const skillData = [
    { category: "Programming", skills: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS"], color: "var(--primary)" },
    { category: "Databases", skills: ["MongoDB", "SQL"], color: "var(--secondary)" },
    { category: "Core Concepts", skills: ["DSA", "OOP", "Problem Solving"], color: "#10b981" },
    { category: "Technologies", skills: ["MERN Stack"], color: "#f59e0b" }
];

const Skills = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Technical <span className="text-gradient">Skills</span></h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--gradient-main)', margin: '15px auto', borderRadius: '2px' }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
            }}>
                {skillData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card"
                        style={{ padding: '30px' }}
                    >
                        <h3 style={{ color: item.color, marginBottom: '20px', fontSize: '1.3rem', fontWeight: 600 }}>{item.category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {item.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    style={{
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: `1px solid ${item.color}44`,
                                        fontSize: '0.9rem',
                                        color: 'var(--text-main)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = item.color;
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.color = 'var(--text-main)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
