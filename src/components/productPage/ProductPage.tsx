import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './productPage.module.css';
import MyButton from '../myButton/MyButton';
import Loader from '../loader/Loader';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.productPage}>
      <h1>{product?.title}</h1>
      <img src={product?.image} alt={product?.title} className={styles.image} />
      <p className={styles.description}>{product?.description}</p>
      <p className={styles.price}>${product?.price.toFixed(2)}</p>
      <Link to={'/shop'}><MyButton name='back to shop' type={'button'} /></Link>
    </div>
  );
}
