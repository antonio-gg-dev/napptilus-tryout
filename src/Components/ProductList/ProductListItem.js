import {Link} from "react-router-dom";
import styles from "./ProductListItem.module.scss"

/**
 * @param product {ProductSummary}
 */
export function ProductListItem({ product }) {
    return (
        <div className={styles['product-list-item__card']}>
            <img
                className={styles['product-list-item__image']}
                src={product.imageUrl}
                alt={product.imageAlt}
            />
            <strong className={styles['product-list-item__model']}>
                {product.model}
            </strong>
            <span className={styles['product-list-item__brand']}>
                {product.brand}
            </span>
            { !product.soldOut
                ? <span className={styles['product-list-item__price']}>{product.humanPrice}</span>
                : <span className={styles['product-list-item__sold-out']}>Agotado!</span>
            }
            <Link
                className={styles['product-list-item__link']}
                to={`/products/${product.id}`}
            >
                <span className="sr-only">
                    Ver producto
                </span>
            </Link>
        </div>
    )
}
