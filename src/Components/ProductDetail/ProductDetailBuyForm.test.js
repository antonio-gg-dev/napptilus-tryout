import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {ProductDetailBuyForm} from "./ProductDetailBuyForm";
import {ProductDetail} from "../../Entities/ProductDetail";
import {Color} from "../../Entities/VO/Color";
import {Storage} from "../../Entities/VO/Storage";
import {CartCountContext} from "../../Contexts/CartCountContext";
import {buyProduct} from "../../Services/CartService";

jest.mock('../../Services/CartService')

describe('src/Components/ProductDetail/ProductDetailBuyForm.js', () => {
    it('should call buyProduct service when buy button is clicked', async () => {
        const product = new ProductDetail(
            'expected-id',
            'Acer',
            'Iconia Talk S',
            195,
            'Quad-core 1.3 GHz Cortex-A53',
            '2 GB RAM',
            'Android 6.0 (Marshmallow)',
            '7.0 inches (~69.8% screen-to-body ratio)',
            'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
            '13 MP autofocus',
            '2 MP 720p',
            '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
            '260',
            [ new Color(1000, 'Black') ],
            [ new Storage(2000, '64 GB') ],
            '/stories/product-image.jpg',
        )
        const setCartCount = jest.fn()

        render(
            <CartCountContext.Provider value={{ setCartCount }}>
                <ProductDetailBuyForm
                    product={product}
                />
            </CartCountContext.Provider>
        )

        buyProduct.mockResolvedValue(23)

        fireEvent.click(screen.getByTestId('buy-button'))

        expect(buyProduct).toHaveBeenCalledWith(product.id, product.colors[0].code, product.storages[0].code)
        await waitFor(() => expect(setCartCount).toHaveBeenCalledWith(23))
    })

    it('should not show sold out label when there are stock', () => {
        const product = new ProductDetail(
            'expected-id',
            'Acer',
            'Iconia Talk S',
            195,
            'Quad-core 1.3 GHz Cortex-A53',
            '2 GB RAM',
            'Android 6.0 (Marshmallow)',
            '7.0 inches (~69.8% screen-to-body ratio)',
            'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
            '13 MP autofocus',
            '2 MP 720p',
            '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
            '260',
            [ new Color(1000, 'Black') ],
            [ new Storage(2000, '64 GB') ],
            '/stories/product-image.jpg',
        )

        render(
            <CartCountContext.Provider value={{ setCartCount: () => {} }}>
                <ProductDetailBuyForm
                    product={product}
                />
            </CartCountContext.Provider>
        )

        expect(screen.queryByTestId('sold-out')).toBeNull()
        expect(screen.getByTestId('buy-button')).toBeInTheDocument()
    })


    it('should show a sold out label when there are not stock', () => {
        const product = new ProductDetail(
            'expected-id',
            'Acer',
            'Iconia Talk S',
            null,
            'Quad-core 1.3 GHz Cortex-A53',
            '2 GB RAM',
            'Android 6.0 (Marshmallow)',
            '7.0 inches (~69.8% screen-to-body ratio)',
            'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
            '13 MP autofocus',
            '2 MP 720p',
            '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
            '260',
            [ new Color(1000, 'Black') ],
            [ new Storage(2000, '64 GB') ],
            '/stories/product-image.jpg',
        )

        render(
            <CartCountContext.Provider value={{ setCartCount: () => {} }}>
                <ProductDetailBuyForm
                    product={product}
                />
            </CartCountContext.Provider>
        )

        expect(screen.queryByTestId('buy-button')).toBeNull()
        expect(screen.getByTestId('sold-out')).toBeInTheDocument()
    })
})
