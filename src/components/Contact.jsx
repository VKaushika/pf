import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Let’s <span className="text-gradient">Connect</span></h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--gradient-main)', margin: '15px auto', borderRadius: '2px' }}></div>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '20px' }}>Get in Touch</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <a href="mailto:vkaushi74@gmail.com" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            textDecoration: 'none',
                            color: 'var(--text-main)',
                            padding: '15px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.3s ease'
                        }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Mail size={20} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Me</p>
                                <p style={{ fontWeight: 500 }}>vkaushi74@gmail.com</p>
                            </div>
                        </a>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://github.com/VKaushika/" target="_blank" rel="noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--secondary)'; e.currentTarget.style.color = 'var(--secondary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }}>
                                <Github size={24} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }}>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ padding: '40px' }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
                            <input type="text" placeholder="Your Name" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                            <input type="email" placeholder="Your Email" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea placeholder="Your Message" rows="4" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none',
                                resize: 'none'
                            }}></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
