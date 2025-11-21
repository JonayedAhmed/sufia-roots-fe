'use client';

import { useState } from 'react';
import Image from 'next/image';

const styles = {
    card: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
    },
    badge: {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: '#d32f2f',
        color: '#fff',
        padding: '0.5rem 1rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        letterSpacing: '1px',
        zIndex: 2,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    soldOutText: {
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: '600',
        letterSpacing: '2px',
    },
    chooseButton: {
        backgroundColor: '#DAA520',
        color: '#333',
        border: 'none',
        padding: '1rem 2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        letterSpacing: '1.5px',
        cursor: 'pointer',
        transition: 'all 0.3s',
    },
    content: {
        padding: '1.5rem',
    },
    category: {
        fontSize: '0.75rem',
        color: '#666',
        letterSpacing: '1px',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
    },
    productName: {
        fontSize: '1.125rem',
        fontWeight: '500',
        color: '#333',
        marginBottom: '1rem',
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.75rem',
    },
    price: {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#333',
    },
    salePrice: {
        color: '#d32f2f',
    },
    stars: {
        color: '#DAA520',
        fontSize: '1rem',
    },
};

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleButtonMouseEnter = (e) => {
        e.target.style.backgroundColor = '#333';
        e.target.style.color = '#fff';
    };

    const handleButtonMouseLeave = (e) => {
        e.target.style.backgroundColor = '#DAA520';
        e.target.style.color = '#333';
    };

    return (
        <div
            style={{
                ...styles.card,
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={styles.imageContainer}>
                {product.onSale && <div style={styles.badge}>SALE</div>}
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                {product.soldOut && (
                    <div style={styles.overlay}>
                        <span style={styles.soldOutText}>SOLD OUT</span>
                    </div>
                )}
                {isHovered && !product.soldOut && (
                    <div style={styles.overlay}>
                        <button
                            style={styles.chooseButton}
                            onMouseEnter={handleButtonMouseEnter}
                            onMouseLeave={handleButtonMouseLeave}
                        >
                            CHOOSE OPTIONS
                        </button>
                    </div>
                )}
            </div>
            <div style={styles.content}>
                <p style={styles.category}>{product.category}</p>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.priceContainer}>
                    <span style={{
                        ...styles.price,
                        ...(product.onSale ? styles.salePrice : {})
                    }}>
                        ${product.price}
                    </span>
                </div>
                <div style={styles.stars}>
                    {'★'.repeat(product.rating)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
