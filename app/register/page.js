'use client';

import { useState } from 'react';
import Link from 'next/link';

const styles = {
    container: {
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 32px 64px',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#333',
    },
    subtitle: {
        marginBottom: '30px',
        color: '#6b6b6b',
        fontSize: '14px',
    },
    inputWrapper: {
        marginBottom: '20px',
    },
    input: {
        width: '600px',
        maxWidth: '100%',
        padding: '16px',
        fontSize: '16px',
        border: '1px solid #d1d1d1',
        backgroundColor: 'transparent',
        transition: 'border-color 0.3s',
        outline: 'none',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        marginTop: '32px',
    },
    button: {
        padding: '18px 56px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#fff',
        backgroundColor: '#D4A574',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        letterSpacing: '2px',
    },
    link: {
        color: '#333',
        fontSize: '16px',
        textDecoration: 'none',
    },
};


const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register Data:', registerData);
        // Backend integration will be added here
    };

    return (
        <div style={styles.container}>
            <div>
                <h1 style={styles.title}>Create Account</h1>
                <p style={styles.subtitle}>
                    Already have an account?{' '}
                    <Link href="/login" style={{ color: '#333', textDecoration: 'underline' }}>
                        Sign in
                    </Link>
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={styles.inputWrapper}>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First name"
                            value={registerData.firstName}
                            onChange={handleInputChange}
                            style={styles.input}
                            onFocus={(e) => e.target.style.borderColor = '#333'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d1d1'}
                            required
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            value={registerData.lastName}
                            onChange={handleInputChange}
                            style={styles.input}
                            onFocus={(e) => e.target.style.borderColor = '#333'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d1d1'}
                            required
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={handleInputChange}
                            style={styles.input}
                            onFocus={(e) => e.target.style.borderColor = '#333'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d1d1'}
                            required
                        />
                    </div>

                    <div style={styles.inputWrapper}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={handleInputChange}
                            style={styles.input}
                            onFocus={(e) => e.target.style.borderColor = '#333'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d1d1'}
                            required
                        />
                    </div>

                    <div style={styles.buttonContainer}>
                        <button
                            type="submit"
                            style={styles.button}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#b88a5e'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A574'}
                        >
                            CREATE
                        </button>
                        <Link href="/" style={styles.link}>
                            Return to Store
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
