import {ProductDetail} from "./ProductDetail";
import {Color} from "./VO/Color";
import {Storage} from "./VO/Storage";

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

const productWithoutPrice = new ProductDetail(
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

describe('src/Entities/ProductDetail.js', () => {
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

    describe('get humanWeight', () => {
        it('should return an human readable weight', () => {
            expect(product.humanWeight).toBe('260 gr')
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
