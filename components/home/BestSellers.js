'use client';

import { useState } from 'react';
import Image from 'next/image';

const styles = {
    section: {
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#333',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    },
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

const initialProducts = [
    {
        id: 1,
        name: 'Halal Amish Raised Whole Chicken',
        category: 'WEGOTMEAT',
        price: 16.99,
        image: '/images/best-seller-1.png',
        rating: 5,
        soldOut: false,
        onSale: false,
    },
    {
        id: 2,
        name: 'Pasture Raised Halal Whole Chicken',
        category: 'WEGOTMEAT- COLUMBUS OHIO HALAL MEAT DELIVERY',
        price: 22.99,
        image: '/images/best-seller-2.png',
        rating: 5,
        soldOut: true,
        onSale: false,
    },
    {
        id: 3,
        name: 'Halal Small Cornish Hens',
        category: 'WEGOTMEAT- COLUMBUS OHIO HALAL MEAT DELIVERY',
        price: 8.99,
        image: '/images/best-seller-3.png',
        rating: 5,
        soldOut: false,
        onSale: true,
    },
    {
        id: 4,
        name: 'Halal Whole Country Chicken',
        category: 'WEGOTMEAT- COLUMBUS OHIO HALAL MEAT DELIVERY',
        price: 15.99,
        image: '/images/best-seller-4.png',
        rating: 5,
        soldOut: false,
        onSale: false,
    },
];

const BestSellers = () => {
    const [bestSellingProducts, setBestSellingProducts] = useState(initialProducts);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section style={styles.section}>
            <h2 style={styles.title}>Our Best Sellers</h2>
            <div style={styles.grid}>
                {bestSellingProducts.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            ...styles.card,
                            transform: hoveredCard === product.id ? 'translateY(-8px)' : 'translateY(0)',
                            boxShadow: hoveredCard === product.id ? '0 8px 20px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                        onMouseEnter={() => setHoveredCard(product.id)}
                        onMouseLeave={() => setHoveredCard(null)}
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
                            {hoveredCard === product.id && !product.soldOut && (
                                <div style={styles.overlay}>
                                    <button
                                        style={styles.chooseButton}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#333';
                                            e.target.style.color = '#fff';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#DAA520';
                                            e.target.style.color = '#333';
                                        }}
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
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
