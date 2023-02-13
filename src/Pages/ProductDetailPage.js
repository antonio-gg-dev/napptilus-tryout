import {useParams} from "react-router-dom";

export function ProductDetailPage () {
    const {productId} = useParams()

    return (
        <div>Product Detail Page! {productId}</div>
    )
}
