import {ProductDetailSpecsTable} from "./ProductDetailSpecsTable";
import {ProductDetail} from "../../Entities/ProductDetail";

export default {
    component: ProductDetailSpecsTable,
    argTypes: {
        brand: { type: 'string' },
        model: { type: 'string' },
        cpu: { type: 'string' },
        ram: { type: 'string' },
        os: { type: 'string' },
        displayResolution: { type: 'string' },
        battery: { type: 'string' },
        primaryCamera: { type: 'string' },
        secondaryCamera: { type: 'string' },
        dimensions: { type: 'string' },
        weight: { type: 'string' },
    },
}

const Builder = (args) => {
    const product = new ProductDetail(
        'some-id',
        args.brand,
        args.model,
        null,
        args.cpu,
        args.ram,
        args.os,
        args.displayResolution,
        args.battery,
        args.primaryCamera,
        args.secondaryCamera,
        args.dimensions,
        args.weight,
        [],
        [],
        '',
    )

    return <ProductDetailSpecsTable
        product={product}
    />
}

export const Default = (args) => Builder(args)
Default.args = {
    brand: 'Acer',
    model: 'Iconia Talk S',
    cpu: 'Quad-core 1.3 GHz Cortex-A53',
    ram: '2 GB RAM',
    os: 'Android 6.0 (Marshmallow)',
    displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    primaryCamera: '13 MP autofocus',
    secondaryCamera: '2 MP 720p',
    dimensions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight: 260,
}

export const NoSpecs = (args) => Builder(args)
NoSpecs.args = {
    brand: 'Acer',
    model: 'Iconia Talk S',
    cpu: '',
    ram: '',
    os: '',
    displayResolution: '',
    battery: '',
    primaryCamera: '',
    secondaryCamera: '',
    dimensions: '',
    weight: '',
}

