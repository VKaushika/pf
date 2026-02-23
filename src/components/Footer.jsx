import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 20px',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background: 'var(--bg-darker)'
        }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                © 2026 V Kaushika
            </p>
            <p style={{ marginTop: '10px', fontWeight: 500 }}>
                Built with passion and code ❤️
            </p>
        </footer>
    );
};

export default Footer;
