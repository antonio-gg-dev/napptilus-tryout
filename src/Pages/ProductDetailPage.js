import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ProductDetailService} from "../Services/ProductDetailService";
import {NotFound} from "./NotFound";

export function ProductDetailPage () {
    const {productId} = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productDetailService = new ProductDetailService()

        const getProductById = async (productId) => {
            setProduct(await productDetailService.getProductById(productId))
            setLoading(false)
        }

        getProductById(productId)
    }, [productId])

    if (!loading && !product) {
        return <NotFound />
    }

    return (
        <div>
            Product Detail Page! {productId}
        </div>
    )
}
