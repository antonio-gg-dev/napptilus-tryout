import {Link} from "react-router-dom";

/**
 * @param product {ProductSummary}
 */
export function ProductListItem({ product }) {
    return (
        <Link
            to={`/products/${product.id}`}
        >
            <img
                src={product.imageUrl}
                alt={product.imageAlt}
            />
            <strong>{product.model}</strong>
            {product.brand}
            {product.humanPrice}
        </Link>
    )
}
