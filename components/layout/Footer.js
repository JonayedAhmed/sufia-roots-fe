'use client';

import Link from 'next/link';

const styles = {
    footer: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '4rem 2rem 2rem',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
    },
    topSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid #333',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    heading: {
        fontSize: '1.125rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        letterSpacing: '0.5px',
    },
    link: {
        color: '#999',
        textDecoration: 'none',
        fontSize: '0.875rem',
        transition: 'color 0.3s',
        cursor: 'pointer',
    },
    description: {
        color: '#999',
        fontSize: '0.875rem',
        lineHeight: '1.6',
    },
    bottomSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '2rem',
    },
    copyright: {
        color: '#666',
        fontSize: '0.875rem',
    },
    socialLinks: {
        display: 'flex',
        gap: '1rem',
    },
    socialIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontSize: '1.125rem',
    },
};

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Top Section */}
                <div style={styles.topSection}>
                    {/* About Column */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Sufia Roots</h3>
                        <p style={styles.description}>
                            Your trusted source for premium halal meat products.
                            We provide fresh, high-quality meat delivered right to your door.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Quick Links</h3>
                        <Link
                            href="/about"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/products"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Products
                        </Link>
                        <Link
                            href="/contact"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/faq"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            FAQ
                        </Link>
                    </div>

                    {/* Customer Service */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Customer Service</h3>
                        <Link
                            href="/shipping"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Shipping Policy
                        </Link>
                        <Link
                            href="/returns"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Returns & Refunds
                        </Link>
                        <Link
                            href="/privacy"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            style={styles.link}
                            onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.color = '#999'}
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Contact Us</h3>
                        <p style={styles.description}>
                            Email: info@sufiaroots.com
                        </p>
                        <p style={styles.description}>
                            Phone: +1 (555) 123-4567
                        </p>
                        <p style={styles.description}>
                            Address: 123 Main Street<br />
                            Columbus, OH 43215
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={styles.bottomSection}>
                    <p style={styles.copyright}>
                        © {new Date().getFullYear()} Sufia Roots. All rights reserved.
                    </p>
                    <div style={styles.socialLinks}>
                        <div
                            style={styles.socialIcon}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                        >
                            f
                        </div>
                        <div
                            style={styles.socialIcon}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                        >
                            𝕏
                        </div>
                        <div
                            style={styles.socialIcon}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                        >
                            in
                        </div>
                        <div
                            style={styles.socialIcon}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A574'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                        >
                            📷
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
