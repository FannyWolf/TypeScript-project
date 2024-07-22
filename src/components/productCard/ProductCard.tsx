import styles from './productCard.module.css';

interface IProductCardProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating?: {
        rate: number,
        count: number
    }
}

function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function ProductCard({id, title, price, description, category, image}: IProductCardProps) {
    return (
        <div className={styles.productCard}>
            <img src={image} alt={title} />
            <h4>{truncateText(title, 20)}</h4>
            <p className={styles.price}>${price.toFixed(2)}</p>
            <p className={styles.description}>{truncateText(description, 40)}</p>
            <p className={styles.category}>{category}</p>
        </div>
    );
}

export default ProductCard;
