import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ProductDetailService} from "../Services/ProductDetailService";
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
        const productDetailService = new ProductDetailService()
        const getProductById = async (productId) => {
            setProduct(await productDetailService.getProductById(productId))
            setLoading(false)
        }

        getProductById(productId)
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
