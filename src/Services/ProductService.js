import {ProductSummary} from "../Entities/ProductSummary";

export class ProductService {
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
                "https://2gm2eu9uuw.us-east-1.awsapprunner.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
            ),
            new ProductSummary(
                "cGjFJlmqNPIwU59AOcY8H",
                "Acer",
                "Liquid Z6 Plus",
                "250",
                "https://2gm2eu9uuw.us-east-1.awsapprunner.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
            ),
            new ProductSummary(
                "8hKbH2UHPM_944nRHYN1n",
                "Acer",
                "Liquid Z6",
                "120",
                "https://2gm2eu9uuw.us-east-1.awsapprunner.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
            ),
            new ProductSummary(
                "xyPoqGJxYR4Nn3yVGQcfI",
                "Acer",
                "Iconia Tab 10 A3-A40",
                "230",
                "https://2gm2eu9uuw.us-east-1.awsapprunner.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg"
            ),
            new ProductSummary(
                "ND1elEt4nqZrCeFflDUZ2",
                "Acer",
                "Liquid X2",
                "230",
                "https://2gm2eu9uuw.us-east-1.awsapprunner.com/images/ND1elEt4nqZrCeFflDUZ2.jpg"
            ),
        ]
    }
}
