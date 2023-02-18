import styles from "./ProductDetailSpecsTable.module.scss";

/**
 * @param product {ProductDetail}
 */
export function ProductDetailSpecsTable ({ product }) {
    return (
        <>
            <h2 className={styles['product-detail-specs-table__title']}>
                Especificaciones
            </h2>
            <table className={styles['product-detail-specs-table__table']}>
                <tbody>
                <tr>
                    <th>Marca</th>
                    <td>{product.brand}</td>
                </tr>
                <tr>
                    <th>Modelo</th>
                    <td>{product.model}</td>
                </tr>
                { product.cpu &&
                    <tr>
                        <th>Procesador</th>
                        <td>{product.cpu}</td>
                    </tr>
                }
                { product.ram &&
                    <tr>
                        <th>Memoria</th>
                        <td>{product.ram}</td>
                    </tr>
                }
                { product.os &&
                    <tr>
                        <th>Sistema Operativo</th>
                        <td>{product.os}</td>
                    </tr>
                }
                { product.displayResolution &&
                    <tr>
                        <th>Resolución</th>
                        <td>{product.displayResolution}</td>
                    </tr>
                }
                { product.battery &&
                    <tr>
                        <th>Batería</th>
                        <td>{product.battery}</td>
                    </tr>
                }
                { product.primaryCamera &&
                    <tr>
                        <th>Cámara Principal</th>
                        <td>{product.primaryCamera}</td>
                    </tr>
                }
                { product.secondaryCamera &&
                    <tr>
                        <th>Cámara Secundaria</th>
                        <td>{product.secondaryCamera}</td>
                    </tr>
                }
                { product.dimensions &&
                    <tr>
                        <th>Dimensiones</th>
                        <td>{product.dimensions}</td>
                    </tr>
                }
                { product.weight &&
                    <tr>
                        <th>Peso</th>
                        <td>{product.humanWeight}</td>
                    </tr>
                }
                </tbody>
            </table>
        </>
    )
}
