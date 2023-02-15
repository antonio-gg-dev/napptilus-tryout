import {ProductSummaryService} from "../Services/ProductSummaryService";
import {ProductList} from "../Components/ProductList/ProductList";

export function ProductListPage () {
    const productSummaryService = new ProductSummaryService()
    const products = productSummaryService.getProductList()

    return (
        <ProductList
            products={products}
        />
    )
}
