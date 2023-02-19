import {ProductSummary} from "./ProductSummary";
import {Color} from "./VO/Color";
import {Storage} from "./VO/Storage";

const product = new ProductSummary(
    'expected-id',
    'Acer',
    'Iconia Talk S',
    195,
    'Quad-core 1.3 GHz Cortex-A53',
)

const productWithoutPrice = new ProductSummary(
    'expected-id',
    'Acer',
    'Iconia Talk S',
    null,
    'Quad-core 1.3 GHz Cortex-A53',
)

describe('src/Entities/ProductSummary.js', () => {
    describe('get name', () => {
        it('should return brand and model', () => {
            expect(product.name).toBe('Acer Iconia Talk S')
        })
    })

    describe('get imageAlt', () => {
        it('should return a image description', () => {
            expect(product.imageAlt).toBe('Imagen del "Acer Iconia Talk S".')
        })
    })

    describe('get soldOut', () => {
        it('should return false when price is set', () => {
            expect(product.soldOut).toBe(false)
        })

        it('should return true when price is not set', () => {
            expect(productWithoutPrice.soldOut).toBe(true)
        })
    })

    describe('get humanPrice', () => {
        it('should return an human readable price when price is set', () => {
            expect(product.humanPrice).toBe('195.00 €')
        })

        it('should return null when price is not set', () => {
            expect(productWithoutPrice.humanPrice).toBe(null)
        })
    })
})
