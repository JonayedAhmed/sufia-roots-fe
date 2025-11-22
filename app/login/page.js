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
    wrapper: {
        maxWidth: '920px',
        width: '100%',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#333',
        marginBottom: '30px',
    },
    inputWrapper: {
        marginBottom: '20px',
    },
    input: {
        width: '600px',
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
    createAccountWrapper: {
        marginTop: '48px',
    },
    createAccountLink: {
        color: '#333',
        textDecoration: 'underline',
    },
};


const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginData);
        // Backend integration will be added here
    };

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <h1 style={styles.title}>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div style={styles.inputWrapper}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={loginData.email}
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
                            value={loginData.password}
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
                            SIGN IN
                        </button>
                        <Link href="/" style={styles.link}>
                            Return to Store
                        </Link>
                    </div>
                </form>

                <div style={styles.createAccountWrapper}>
                    <Link href="/register" style={styles.createAccountLink}>
                        Create account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
