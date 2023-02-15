import {ProductSummaryService} from "../Services/ProductSummaryService";
import {ProductList} from "../Components/ProductList/ProductList";
import {useEffect, useState} from "react";

export function ProductListPage () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productSummaryService = new ProductSummaryService()
        const getProductList = async () => setProducts(await productSummaryService.getProductList())

        getProductList()
    }, [])

    return (
        <ProductList
            products={products}
        />
    )
}
