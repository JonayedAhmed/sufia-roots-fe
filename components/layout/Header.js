'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
        zIndex: 1000,
    },
    headerScrolled: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    nav: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    navLink: {
        fontSize: '0.875rem',
        fontWeight: '500',
        letterSpacing: '0.5px',
        color: '#fff',
        textDecoration: 'none',
        transition: 'color 0.3s',
        cursor: 'pointer',
    },
    navLinkScrolled: {
        color: '#333',
    },
    icons: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
    },
    iconButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: '#fff',
        transition: 'color 0.3s',
    },
    iconButtonScrolled: {
        color: '#333',
    },
};

const navItems = [
    'HOME',
    'PRODUCTS',
    'ABOUT',
    'CONTACT',
];



const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const headerStyle = scrolled
        ? { ...styles.header, ...styles.headerScrolled }
        : styles.header;

    return (
        <header style={headerStyle}>
            <div style={styles.container}>
                {/* Logo */}
                <div style={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="Sufia Roots Logo"
                            width={120}
                            height={60}
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <nav style={styles.nav}>
                    {navItems.map((item, index) => {
                        const navLinkStyle = scrolled
                            ? { ...styles.navLink, ...styles.navLinkScrolled }
                            : styles.navLink;
                        return (
                            <Link
                                key={index}
                                href={`/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                style={navLinkStyle}
                                onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                                onMouseLeave={(e) => e.target.style.color = scrolled ? '#333' : '#fff'}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </nav>

                {/* Icons */}
                <div style={styles.icons}>
                    <button
                        style={scrolled ? { ...styles.iconButton, ...styles.iconButtonScrolled } : styles.iconButton}
                        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                        aria-label="Search"
                    >
                        <Image
                            src="/icons/searchIcon copy.svg"
                            alt="Search"
                            width={26}
                            height={26}
                        />
                    </button>
                    <button
                        style={scrolled ? { ...styles.iconButton, ...styles.iconButtonScrolled } : styles.iconButton}
                        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                        aria-label="User Account"
                    >
                        <Image
                            src="/icons/userIcon.svg"
                            alt="User"
                            width={26}
                            height={26}
                        />
                    </button>
                    <button
                        style={scrolled ? { ...styles.iconButton, ...styles.iconButtonScrolled } : styles.iconButton}
                        onMouseEnter={(e) => e.target.style.color = '#D4A574'}
                        onMouseLeave={(e) => e.target.style.color = scrolled ? '#333' : '#fff'}
                        aria-label="Shopping Cart"
                    >
                        🛒
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
