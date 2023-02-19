import {ProductDetail} from "./ProductDetail";
import {ProductDetail as ProductDetailEntity} from "../../Entities/ProductDetail";
import {Storage} from "../../Entities/VO/Storage";
import {Color} from "../../Entities/VO/Color";
import {withReactContext} from "storybook-react-context";
import {CartCountContext} from "../../Contexts/CartCountContext";

export default {
    component: ProductDetail,
    decorators: [withReactContext({
        Context: CartCountContext,
        initialState: {
            cartCount: 0,
            setCartCount: () => {}
        },
    })],
    argTypes: {
        brand: { type: 'string' },
        model: { type: 'string' },
        price: { type: 'number' },
        cpu: { type: 'string' },
        ram: { type: 'string' },
        os: { type: 'string' },
        displayResolution: { type: 'string' },
        battery: { type: 'string' },
        primaryCamera: { type: 'string' },
        secondaryCamera: { type: 'string' },
        dimensions: { type: 'string' },
        weight: { type: 'string' },
        storages: { control: 'object' },
        colors: { control: 'object' },
        imageUrl: { type: 'string' },
    },
}

const Builder = (args) => {
    const product = new ProductDetailEntity(
        'some-id',
        args.brand,
        args.model,
        args.price,
        args.cpu,
        args.ram,
        args.os,
        args.displayResolution,
        args.battery,
        args.primaryCamera,
        args.secondaryCamera,
        args.dimensions,
        args.weight,
        args.storages.map((storage, index) => new Storage(index, storage)),
        args.colors.map((color, index) => new Color(index, color)),
        args.imageUrl,
    )

    return <ProductDetail
        product={product}
    />
}

export const Default = (args) => Builder(args)
Default.args = {
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: 195,
    cpu: 'Quad-core 1.3 GHz Cortex-A53',
    ram: '2 GB RAM',
    os: 'Android 6.0 (Marshmallow)',
    displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    primaryCamera: '13 MP autofocus',
    secondaryCamera: '2 MP 720p',
    dimensions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight: '260',
    colors: [
        'Black',
        'White',
        'Silver',
    ],
    storages: [
        '16 GB',
        '32 GB',
    ],
    imageUrl: '/stories/product-image.jpg',
}
