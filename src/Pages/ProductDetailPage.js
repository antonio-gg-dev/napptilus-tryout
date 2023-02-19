import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getProductById} from "../Services/ProductDetailService";
import {NotFound} from "./NotFound";
import {ProductDetail} from "../Components/ProductDetail/ProductDetail";
import {Breadcrumb} from "../Entities/VO/Breadcrumb";
import {BreadcrumbContext} from "../Contexts/BreadcrumbContext";

export function ProductDetailPage () {
    const {productId} = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {setBreadcrumbs} = useContext(BreadcrumbContext)

    useEffect(() => {
        const loadProductById = async (productId) => {
            setProduct(await getProductById(productId))
            setLoading(false)
        }

        loadProductById(productId)
    }, [productId])

    useEffect(() => {
        if (product) {
            setBreadcrumbs([
                new Breadcrumb('Productos', '/'),
                new Breadcrumb(product.name)
            ])
        }
    }, [product, setBreadcrumbs])


    if (!loading && !product) {
        return <NotFound />
    }

    return (
        <>
            { product &&
                <ProductDetail
                    product={product}
                />
            }
        </>
    )
}
