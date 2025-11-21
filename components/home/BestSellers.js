'use client';

import { useState } from 'react';
import ProductCard from '../common/ProductCard';

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '1.5rem',
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

    return (
        <section style={styles.section}>
            <h2 style={styles.title}>Our Best Sellers</h2>
            <div style={styles.grid}>
                {bestSellingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
