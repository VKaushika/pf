import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            university: "NIST University",
            degree: "B.Tech in Computer Science",
            duration: "2024 – 2028",
            location: "Berhampur, Odisha"
        }
    ];

    return (
        <section id="education">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Education</h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--gradient-main)', margin: '15px auto', borderRadius: '2px' }}></div>
            </motion.div>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Timeline Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--primary), var(--secondary))'
                }}></div>

                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'relative',
                            paddingLeft: '60px',
                            marginBottom: '40px'
                        }}
                    >
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '11px',
                            top: '5px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'var(--primary)',
                            boxShadow: '0 0 10px var(--primary-glow)',
                            zIndex: 1
                        }}></div>

                        <div className="glass-card" style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)' }}>{edu.university}</h3>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 500, margin: '5px 0' }}>{edu.degree}</h4>
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                                        <Calendar size={14} /> {edu.duration}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end', marginTop: '5px' }}>
                                        <MapPin size={14} /> {edu.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
