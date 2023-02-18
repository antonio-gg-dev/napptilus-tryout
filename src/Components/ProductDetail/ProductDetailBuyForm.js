import {useState} from "react";
import styles from "./ProductDetailBuyForm.module.scss"
/**
 * @param product {ProductDetail}
 */
export function ProductDetailBuyForm ({ product }) {
    const [activeColorCode, setActiveColorCode] = useState(product.colors[0].code)
    const [activeStorageCode, setActiveStorageCode] = useState(product.storages[0].code)

    return (
        <div className={styles['product-detail-buy-form__form']}>
            <h2 className={styles['product-detail-buy-form__color-title']}>
                Selecciona tu color:
            </h2>
            <div className={styles['product-detail-buy-form__color-picker']}>
                { product.colors.map((color) => (
                    <label
                        className={`
                            ${styles['product-detail-buy-form__color-option']}
                            ${activeColorCode === color.code ? styles['product-detail-buy-form__color-option--active'] : ''}
                        `}
                        style={{
                            '--color': color.cssColor
                        }}
                        key={color.code}
                        title={color.name}
                    >
                        {color.name}

                        <input
                            type="radio"
                            value={color.code}
                            name="color"
                            onChange={() => setActiveColorCode(color.code)}
                            checked={activeColorCode === color.code}
                        />
                    </label>
                )) }
            </div>

            <h2 className={styles['product-detail-buy-form__storage-title']}>
                Selecciona tu almacenamiento:
            </h2>
            <div className={styles['product-detail-buy-form__storage-picker']}>
                { product.storages.map((storage) => (
                    <label
                        key={storage.code}
                        className={`
                            ${styles['product-detail-buy-form__storage-option']}
                            ${activeStorageCode === storage.code ? styles['product-detail-buy-form__storage-option--active'] : ''}
                        `}
                    >
                        {storage.name}

                        <input
                            type="radio"
                            value={storage.code}
                            name="storage"
                            onChange={() => setActiveStorageCode(storage.code)}
                            checked={activeStorageCode === storage.code}
                        />
                    </label>
                )) }
            </div>

            <button className={styles['product-detail-buy-form__buy-button']}>
                Comprar!
            </button>
        </div>
    )
}
