import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from './shop.module.css';

interface IProductCard {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function Shop() {
    const [productCards, setProductCards] = useState<IProductCard[]>([]);

    const fetchShop = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if (res.ok) {
            setProductCards(data);
        } else {
            console.error('fetchShop failed ☠️');
        }
    }

    useEffect(() => {
        fetchShop();
    }, []);

    return (
        <div className={styles.shopContainer}>
            <h1>Oh my Shop</h1>
            <div className={styles.productsGrid}>
                {productCards.map(item => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}
