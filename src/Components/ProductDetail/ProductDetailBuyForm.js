import {useState} from "react";
import styles from "./ProductDetailBuyForm.module.scss"
import {ProductDetailColorPicker} from "./ProductDetailColorPicker";
import {ProductDetailStoragePicker} from "./ProductDetailStoragePicker";
/**
 * @param product {ProductDetail}
 */
export function ProductDetailBuyForm ({ product }) {
    const [activeColorCode, setActiveColorCode] = useState(product.colors[0].code)
    const [activeStorageCode, setActiveStorageCode] = useState(product.storages[0].code)

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

            <button className={styles['product-detail-buy-form__buy-button']}>
                Comprar!
            </button>
        </div>
    )
}
