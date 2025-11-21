'use client';

import Image from 'next/image';

const styles = {
    hero: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
    content: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: '#fff',
        padding: '0 2rem',
    },
    preOrder: {
        fontSize: '0.875rem',
        fontWeight: '400',
        letterSpacing: '2px',
        marginBottom: '1rem',
        opacity: 0.95,
    },
    title: {
        fontSize: '4rem',
        fontWeight: '700',
        marginBottom: '2rem',
        lineHeight: '1.2',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    },
    button: {
        backgroundColor: '#fff',
        color: '#333',
        padding: '1rem 3rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        letterSpacing: '1.5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
};

const HeroSection = () => {
    return (
        <section style={styles.hero}>
            {/* Background Image */}
            <div style={styles.imageContainer}>
                <Image
                    src="/images/hero-image-1.jpg"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Dark Overlay */}
            <div style={styles.overlay}></div>

            {/* Content */}
            <div style={styles.content}>
                <p style={styles.preOrder}>NOW ACCEPTING PRE ORDERS FOR HALAL</p>
                <h1 style={styles.title}>Amish Raised Turkey</h1>
                <button
                    style={styles.button}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#D4A574';
                        e.target.style.color = '#fff';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#fff';
                        e.target.style.color = '#333';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    PRE ORDER
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
