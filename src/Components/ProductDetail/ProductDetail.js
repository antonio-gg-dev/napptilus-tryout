import styles from "./ProductDetail.module.scss"
import {ProductDetailSpecsTable} from "./ProductDetailSpecsTable";
import {ProductDetailBuyForm} from "./ProductDetailBuyForm";

/**
 * @param product {ProductDetail}
 */
export function ProductDetail ({ product }) {
    return <div
        className={styles['product-detail__container']}
        key={product.id}
    >
        <div className={styles['product-detail__card']}>
            <h1 className={styles['product-detail__title']}>
                {product.name}
            </h1>

            <img
                className={styles['product-detail__image']}
                src={product.imageUrl}
                alt={product.imageAlt}
            />

            <div className={styles['product-detail__buy']}>
                <ProductDetailBuyForm product={product} />
            </div>

            <div className={styles['product-detail__specs']}>
                <ProductDetailSpecsTable product={product} />
            </div>
        </div>
    </div>
}
