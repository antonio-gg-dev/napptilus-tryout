import {getProductList} from "../Services/ProductSummaryService";
import {ProductList} from "../Components/ProductList/ProductList";
import {useContext, useEffect, useState} from "react";
import {BreadcrumbContext} from "../Contexts/BreadcrumbContext";
import {Breadcrumb} from "../Entities/VO/Breadcrumb";

export function ProductListPage () {
    const [products, setProducts] = useState([])
    const {setBreadcrumbs} = useContext(BreadcrumbContext)

    useEffect(() => {
        const loadProductList = async () => setProducts(await getProductList())

        setBreadcrumbs([
            new Breadcrumb('Productos')
        ])

        loadProductList()
    }, [setBreadcrumbs])

    return (
        <ProductList
            products={products}
        />
    )
}
