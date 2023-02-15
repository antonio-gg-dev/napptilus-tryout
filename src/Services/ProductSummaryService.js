import {ProductSummary} from "../Entities/ProductSummary";

export class ProductSummaryService {
    /**
     * @returns {Promise<ProductSummary[]>}
     */
    async getProductList() {
        const response = await fetch('https://itx-frontend-test.onrender.com/api/product')

        if (!response.ok) {
            // TODO: Handle errors
            return []
        }

        return (await response.json()).map((rawProductSummary) => {
            return new ProductSummary(
                rawProductSummary.id,
                rawProductSummary.brand,
                rawProductSummary.model,
                rawProductSummary.price,
                rawProductSummary.imgUrl,
            )
        })
    }
}
