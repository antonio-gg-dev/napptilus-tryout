import {useState} from "react";
import styles from "./ProductDetailBuyForm.module.scss"
/**
 * @param product {ProductDetail}
 */
export function ProductDetailBuyForm ({ product }) {
    const [activeColorCode, setActiveColorCode] = useState(product.colors[0].code)
    // const [activeStorageCode, setActiveStorageCode] = useState(product.storages[0].code)

    return (
        <>
            <div className={styles['product-detail-buy-form__color-picker']}>
                { product.colors.map((color) => (
                    <label
                        key={color.code}
                        className={`
                            ${styles['product-detail-buy-form__color-option']}
                            ${activeColorCode === color.code ? styles['product-detail-buy-form__color-option--active'] : ''}
                        `}
                        style={{
                            '--color': color.cssColor
                        }}
                    >
                        {color.name}

                        <input
                            type="radio"
                            value={color.code}
                            name="color"
                            onChange={() => setActiveColorCode(color.code)}
                            checked={activeColorCode === color.code}
                            title={color.name}
                        />
                    </label>
                )) }
            </div>
            { product.storages.map((storage) => (
                <div key={storage.code}>
                    { storage.name }
                </div>
            )) }
        </>
    )
}
