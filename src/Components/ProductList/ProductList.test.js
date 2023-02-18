import {ProductSummary} from "../../Entities/ProductSummary";
import {ProductList} from "./ProductList";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const productsFixture = [
    new ProductSummary(
        'first-id',
        'FirstBrand',
        'FirstModel',
        100,
        'http://some-domain.com/some-image.png',
    ),
    new ProductSummary(
        'second-id',
        'FirstBrand',
        'SecondModel',
        null,
        'http://some-domain.com/some-image.png',
    ),
    new ProductSummary(
        'third-id',
        'SecondBrand',
        'ThirdModel',
        150,
        'http://some-domain.com/some-image.png',
    ),
    new ProductSummary(
        'fourth-id',
        'ThirdBrand',
        'FourthModel',
        250,
        'http://some-domain.com/some-image.png',
    )
]

describe('src/Components/ProductList/ProductList.js', () => {
    it('should show a ProductListItem for each ProductSummary', () => {
        render(
            <BrowserRouter>
                <ProductList
                    products={productsFixture}
                />
            </BrowserRouter>
        )

        expect(screen.getByTestId('product-list').children.length).toEqual(4)
    })

    it('should not show any ProductListItem if no ProductSummary', () => {
        render(
            <BrowserRouter>
                <ProductList
                    products={[]}
                />
            </BrowserRouter>
        )

        expect(screen.getByTestId('product-list').children.length).toEqual(0)
    })

    describe('using the search input', () => {
        it('should filter elements by its model (ci)', () => {
            render(
                <BrowserRouter>
                    <ProductList
                        products={productsFixture}
                    />
                </BrowserRouter>
            )

            const input = screen.getByTestId('search-input')

            fireEvent.change(input, {target: {value: 'firstModel'}})

            expect(screen.getByTestId('product-list').children.length).toEqual(1)
        })

        it('should filter elements by its brand (ci)', () => {
            render(
                <BrowserRouter>
                    <ProductList
                        products={productsFixture}
                    />
                </BrowserRouter>
            )

            const input = screen.getByTestId('search-input')

            fireEvent.change(input, {target: {value: 'thirdBrand'}})

            expect(screen.getByTestId('product-list').children.length).toEqual(1)
        })

        it('should filter elements by its model and brand (ci)', () => {
            render(
                <BrowserRouter>
                    <ProductList
                        products={productsFixture}
                    />
                </BrowserRouter>
            )

            const input = screen.getByTestId('search-input')

            fireEvent.change(input, {target: {value: 'SECOND'}})

            expect(screen.getByTestId('product-list').children.length).toEqual(2)
        })
    })
})
