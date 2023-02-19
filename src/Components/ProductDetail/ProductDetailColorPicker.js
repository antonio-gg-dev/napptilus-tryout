import styles from "./ProductDetailColorPicker.module.scss";

/**
 * @param colors {Color[]}
 * @param activeColorCode {number}
 * @param setActiveColorCode {(number) => {}}
 */
export function ProductDetailColorPicker ({ colors, activeColorCode, setActiveColorCode }) {
    return (
        <>
            <h2 className={styles['product-detail-color-picker__color-title']}>
                Selecciona tu color:
            </h2>
            <div className={styles['product-detail-color-picker__color-picker']}>
                { colors.map((color) => (
                    <label
                        className={`
                                    ${styles['product-detail-color-picker__color-option']}
                                    ${activeColorCode === color.code ? styles['product-detail-color-picker__color-option--active'] : ''}
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
                            data-testid="color-input"
                        />
                    </label>
                )) }
            </div>
        </>
    )
}
