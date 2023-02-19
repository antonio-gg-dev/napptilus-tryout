import {ProductDetail} from "../Entities/ProductDetail";
import {Storage} from "../Entities/VO/Storage";
import {Color} from "../Entities/VO/Color";

/**
 * @returns {Promise<ProductDetail | null>}
 */
export async function getProductById(productId) {
    const lastCall = localStorage.getItem(`getProductById.${productId}.lastCall`)
    const hour = 60 /* minutes */ * 60 /* seconds */ * 1000 /* milliseconds */

    if ((Date.now() - lastCall) > hour) {
        const response = await fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`)

        if (response.ok) {
            localStorage.setItem(`getProductById.${productId}.lastCall`, Date.now())
            localStorage.setItem(
                `getProductById.${productId}.rawProductDetail`,
                JSON.stringify(await response.json())
            )
        }
    }

    const rawProductDetail = JSON.parse(
        localStorage.getItem(`getProductById.${productId}.rawProductDetail`) ?? 'null'
    )

    if (!rawProductDetail) {
        return null
    }

    return new ProductDetail(
        rawProductDetail.id,
        rawProductDetail.brand,
        rawProductDetail.model,
        rawProductDetail.price,
        rawProductDetail.cpu,
        rawProductDetail.ram,
        rawProductDetail.os,
        rawProductDetail.displayResolution,
        rawProductDetail.battery,
        [rawProductDetail.primaryCamera].flat().join(' '),
        [rawProductDetail.secondaryCmera].flat().join(' '), // NOTE: There is a typo on the API response
        rawProductDetail.dimentions,
        rawProductDetail.weight,
        rawProductDetail.options.storages.map((storage) => new Storage(
            storage.code,
            storage.name
        )),
        rawProductDetail.options.colors.map((color) => new Color(
            color.code,
            color.name
        )),
        rawProductDetail.imgUrl
    )
}
