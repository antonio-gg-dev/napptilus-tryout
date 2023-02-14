import {ProductListItem} from "./ProductListItem";

/**
 * @param products {ProductSummary[]}
 */
export function ProductList({ products }) {
    return (
        <>{ products.map(product => {
            return (
                <ProductListItem
                    key={product.id}
                    product={product}
                />
            )
        }) }</>
    )
}
