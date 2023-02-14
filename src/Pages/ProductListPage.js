import {ProductService} from "../Services/ProductService";
import {ProductList} from "../Components/ProductList/ProductList";

export function ProductListPage () {
    const productService = new ProductService()
    const products = productService.getProductList()

    return (
        <ProductList
            products={products}
        />
    )
}
