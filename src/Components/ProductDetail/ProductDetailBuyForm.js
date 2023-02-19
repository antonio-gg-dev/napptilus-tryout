import {useContext, useState} from "react";
import styles from "./ProductDetailBuyForm.module.scss"
import {ProductDetailColorPicker} from "./ProductDetailColorPicker";
import {ProductDetailStoragePicker} from "./ProductDetailStoragePicker";
import {CartCountContext} from "../../Contexts/CartCountContext";
import {buyProduct} from "../../Services/CartService";

/**
 * @param product {ProductDetail}
 */
export function ProductDetailBuyForm ({ product }) {
    const [activeColorCode, setActiveColorCode] = useState(product.colors[0].code)
    const [activeStorageCode, setActiveStorageCode] = useState(product.storages[0].code)
    const {setCartCount} = useContext(CartCountContext);

    const handleBuy = async () => {
        const newCartCount = await buyProduct(product.id, activeColorCode, activeStorageCode)
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

            { product.soldOut
                ? <span
                    className={styles['product-detail-buy-form__sold-out']}
                    data-testid="sold-out"
                >
                    Agotado!
                </span>
                : <button
                    className={styles['product-detail-buy-form__buy-button']}
                    onClick={handleBuy}
                    data-testid="buy-button"
                >
                    Comprar por {product.humanPrice}!
                </button>
            }

        </div>
    )
}
