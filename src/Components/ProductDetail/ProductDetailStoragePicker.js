import styles from "./ProductDetailStoragePicker.module.scss";

/**
 * @param storages {Storage[]}
 * @param activeStorageCode {number}
 * @param setActiveStorageCode {(number) => {}}
 */
export function ProductDetailStoragePicker ({ storages, activeStorageCode, setActiveStorageCode }) {
    return (
        <>
            <h2 className={styles['product-detail-storage-picker__storage-title']}>
                Selecciona tu almacenamiento:
            </h2>
            <div className={styles['product-detail-storage-picker__storage-picker']}>
                { storages.map((storage) => (
                    <label
                        key={storage.code}
                        className={`
                            ${styles['product-detail-storage-picker__storage-option']}
                            ${activeStorageCode === storage.code ? styles['product-detail-storage-picker__storage-option--active'] : ''}
                        `}
                    >
                        {storage.name}

                        <input
                            type="radio"
                            value={storage.code}
                            name="storage"
                            onChange={() => setActiveStorageCode(storage.code)}
                            checked={activeStorageCode === storage.code}
                            data-testid="storage-input"
                        />
                    </label>
                )) }
            </div>
        </>
    )
}
