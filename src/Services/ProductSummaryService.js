import {ProductSummary} from "../Entities/ProductSummary";

export async function getProductList() {
    const lastCall = localStorage.getItem('getProductList.lastCall')
    const hour = 60 /* minutes */ * 60 /* seconds */ * 1000 /* milliseconds */

    if ((Date.now() - lastCall) > hour) {
        const response = await fetch('https://itx-frontend-test.onrender.com/api/product')

        if (response.ok) {
            localStorage.setItem('getProductList.lastCall', Date.now())
            localStorage.setItem(
                'getProductList.rawProductSummaryList',
                JSON.stringify(await response.json())
            )
        }
    }

    const rawProductSummaryList = JSON.parse(
        localStorage.getItem('getProductList.rawProductSummaryList') ?? '[]'
    )

    return rawProductSummaryList.map((rawProductSummary) => {
        return new ProductSummary(
            rawProductSummary.id,
            rawProductSummary.brand,
            rawProductSummary.model,
            rawProductSummary.price,
            rawProductSummary.imgUrl,
        )
    })
}
