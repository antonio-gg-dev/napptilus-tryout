import {ProductSummary} from "../Entities/ProductSummary";

export class ProductSummaryService {
    /**
     * @returns {ProductSummary[]}
     */
    getProductList() {
        return [
            new ProductSummary(
                "ZmGrkLRPXOTpxsU4jjAcv",
                "Acer",
                "Iconia Talk S",
                "170",
                "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
            ),
            new ProductSummary(
                "cGjFJlmqNPIwU59AOcY8H",
                "Acer",
                "Liquid Z6 Plus",
                "250",
                "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
            ),
            new ProductSummary(
                "8hKbH2UHPM_944nRHYN1n",
                "Acer",
                "Liquid Z6",
                "120",
                "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
            ),
            new ProductSummary(
                "xyPoqGJxYR4Nn3yVGQcfI",
                "Acer",
                "Iconia Tab 10 A3-A40",
                "230",
                "https://itx-frontend-test.onrender.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg"
            ),
            new ProductSummary(
                "ND1elEt4nqZrCeFflDUZ2",
                "Acer",
                "Liquid X2",
                "230",
                "https://itx-frontend-test.onrender.com/images/ND1elEt4nqZrCeFflDUZ2.jpg"
            ),
        ]
    }
}
