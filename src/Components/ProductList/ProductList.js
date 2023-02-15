import {ProductListItem} from "./ProductListItem";
import styles from "./ProductList.module.scss"
/**
 * @param products {ProductSummary[]}
 */
export function ProductList({ products }) {
    return (
        <div className={styles['product-list__container']}>
            { products.map(product => {
                return (
                    <ProductListItem
                        key={product.id}
                        product={product}
                    />
                )
            }) }
        </div>
    )
}
