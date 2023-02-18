import {ProductListItem} from "./ProductListItem";
import styles from "./ProductList.module.scss"
import {useState} from "react";
/**
 * @param products {ProductSummary[]}
 */
export function ProductList({ products }) {
    const [searchString, setSearchString] = useState('')

    const tokenize = (string) => {
        return string.toLocaleLowerCase()
            .split(' ')
            .filter((token) => token)
    }

    const searchTokens = tokenize(searchString)

    const filteredProducts = () => {
        return products.filter((product) => {
            const productTokens = tokenize(product.name)

            return searchTokens.every((searchToken) => {
                return productTokens.find((productToken) => {
                    return productToken.includes(searchToken)
                })
            })
        })
    }

    return (
        <div className={styles['product-list__container']}>
            <label className={styles['product-list__search']}>
                <span>
                    <img
                        className={styles['product-list__search-icon']}
                        src="/search.svg"
                        alt=""
                    />
                </span>
                <input
                    className={styles['product-list__search-input']}
                    value={searchString}
                    onChange={({ target }) => setSearchString(target.value)}
                    placeholder="Escribe aquí para buscar"
                />
            </label>

            <div className={styles['product-list__list']}>
                { filteredProducts().map(product => {
                    return (
                        <ProductListItem
                            key={product.id}
                            product={product}
                        />
                    )
                }) }
            </div>
        </div>
    )
}
