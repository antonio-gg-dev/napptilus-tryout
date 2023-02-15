import {ProductSummaryService} from "../Services/ProductSummaryService";
import {ProductList} from "../Components/ProductList/ProductList";
import {useEffect, useState} from "react";

export function ProductListPage () {
    const productSummaryService = new ProductSummaryService()
    const [products, setProducts] = useState([])
    const getProductList = async () => setProducts(await productSummaryService.getProductList())

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <ProductList
            products={products}
        />
    )
}
