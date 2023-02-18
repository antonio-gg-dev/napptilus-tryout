import {useContext, useState} from "react";
import styles from "./ProductDetailBuyForm.module.scss"
import {ProductDetailColorPicker} from "./ProductDetailColorPicker";
import {ProductDetailStoragePicker} from "./ProductDetailStoragePicker";
import {CartCountContext} from "../../Contexts/CartCountContext";
import {CartService} from "../../Services/CartService";

/**
 * @param product {ProductDetail}
 */
export function ProductDetailBuyForm ({ product }) {
    const [activeColorCode, setActiveColorCode] = useState(product.colors[0].code)
    const [activeStorageCode, setActiveStorageCode] = useState(product.storages[0].code)
    const {setCartCount} = useContext(CartCountContext);
    const cartService = new CartService()

    const handleBuy = async () => {
        const newCartCount = await cartService.buyProduct(product.id, activeColorCode, activeStorageCode)
        setCartCount(newCartCount)
    }

    return (
        <div className={styles['product-detail-buy-form__form']}>
            <ProductDetailColorPicker
                colors={product.colors}
                activeColorCode={activeColorCode}
                setActiveColorCode={setActiveColorCode}
            />

            <ProductDetailStoragePicker
                storages={product.storages}
                activeStorageCode={activeStorageCode}
                setActiveStorageCode={setActiveStorageCode}
            />

            <button
                className={styles['product-detail-buy-form__buy-button']}
                onClick={handleBuy}
            >
                Comprar!
            </button>
        </div>
    )
}
