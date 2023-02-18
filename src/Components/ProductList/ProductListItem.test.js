import {ProductSummary} from "../../Entities/ProductSummary";
import {ProductListItem} from "./ProductListItem";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('src/Components/ProductList/ProductListItem.js', () => {
    it('should have a link to the product', () => {
        const productFixture = new ProductSummary(
            'some-id',
            'Some Brand',
            'Some Model',
            100,
            'http://some.image',
        )

        render(
            <ProductListItem
                product={productFixture}
            />
        )

        expect(screen.getByTestId('product-link')).toHaveAttribute('href', '/products/some-id')
    })

    it('should have a price label when is not sold out', () => {
        const productFixture = new ProductSummary(
            'some-id',
            'Some Brand',
            'Some Model',
            100,
            'http://some.image',
        )

        render(
            <BrowserRouter>
                <ProductListItem
                    product={productFixture}
                />
            </BrowserRouter>
        )

        expect(screen.getByTestId('product-price')).toHaveTextContent('100.00 €')
        expect(screen.queryByTestId('product-sold-out')).toBeNull()
    })

    it('should have a sold out label when is sold out', () => {
        const productFixture = new ProductSummary(
            'some-id',
            'Some Brand',
            'Some Model',
            null,
            'http://some.image',
        )

        render(
            <BrowserRouter>
                <ProductListItem
                    product={productFixture}
                />
            </BrowserRouter>
        )

        expect(screen.getByTestId('product-sold-out')).toHaveTextContent('Agotado!')
        expect(screen.queryByTestId('product-price')).toBeNull()
    })
})
