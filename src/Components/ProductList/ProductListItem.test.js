import {ProductSummary} from "../../Entities/ProductSummary";
import {ProductListItem} from "./ProductListItem";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('src/Components/ProductList/ProductListItem.js', () => {
    it('should have a link to the product', () => {
        const productFixture = new ProductSummary(
            'expected-id',
            'Some Brand',
            'Some Model',
            100,
            'http://some-domain.com/some-image.png',
        )

        render(
            <ProductListItem
                product={productFixture}
            />
        )

        expect(screen.getByTestId('product-link')).toHaveAttribute('href', '/products/expected-id')
    })
})
