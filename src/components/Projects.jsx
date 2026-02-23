import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
    {
        title: "ECOHUB",
        desc: "A sustainability-focused platform designed to promote eco-friendly practices and community awareness.",
        tech: ["MERN Stack", "Tailwind CSS", "Node.js"],
        color: "var(--primary)"
    },
    {
        title: "Arcade Game (C++)",
        desc: "A console-based arcade-style game implementing object-oriented programming and game logic design.",
        tech: ["C++", "OOP", "Game Logic"],
        color: "var(--secondary)"
    },
    {
        title: "Contact Management System",
        desc: "A Python application that allows users to store, update, search, and delete contact details efficiently.",
        tech: ["Python", "File I/O"],
        color: "#10b981"
    },
    {
        title: "Vehicle Management System",
        desc: "A system designed to manage vehicle records and maintenance tracking using structured programming principles.",
        tech: ["C", "Data Structures"],
        color: "#f59e0b"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Featured <span className="text-gradient">Projects</span></h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--gradient-main)', margin: '15px auto', borderRadius: '2px' }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px'
            }}>
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card"
                        style={{
                            padding: '40px',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: project.color,
                            opacity: 0.1,
                            borderRadius: '50%',
                            zIndex: 0
                        }}></div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: project.color }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{project.desc}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{ fontSize: '0.8rem', opacity: 0.8 }}>#{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.8)',
                            zIndex: 1000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px'
                        }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            className="glass"
                            style={{
                                maxWidth: '600px',
                                width: '100%',
                                padding: '40px',
                                position: 'relative',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: selectedProject.color }}>{selectedProject.title}</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>{selectedProject.desc}</p>

                            <h4 style={{ marginBottom: '15px' }}>Technologies Used:</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} style={{ padding: '5px 15px', borderRadius: '15px', background: 'rgba(255,255,255,0.1)' }}>{t}</span>
                                ))}
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <a href="#" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    View Detailed Case Study <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
