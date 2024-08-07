// ProductCard.tsx
import React from 'react';
import styles from './productCard.module.css';
import MyButton from '../myButton/MyButton';
import { Link } from 'react-router-dom';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.imgWrapper}>
      <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.titleWrapper}>
      <h3 className={styles.title}>{product.title}</h3>
      </div>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <div className={styles.descriptionWrapper}>
      <p className={styles.description}>{product.description}</p>
      </div>
      <Link to={String(product?.id)}><MyButton name='about product' type={'button'} /></Link>
    </div>
  );
}
