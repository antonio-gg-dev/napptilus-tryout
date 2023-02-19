import {ProductList} from "./ProductList";
import {ProductSummary} from "../../Entities/ProductSummary";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    component: ProductList,
    decorators: [withRouter],
    argTypes: {
        products: {control: 'object'},
    },
}

const Builder = (args) => {
    const products = args.products.map((product) => new ProductSummary(
        product.id,
        product.brand,
        product.model,
        product.price,
        product.imageUrl,
    ))

    return (
        <ProductList
            products={products}
        />
    )
}

export const Default = (args) => Builder(args)
Default.args = {
    products: [
        {
            id: 'first-product',
            brand: 'Acer',
            model: 'Predator 8',
            price: 350,
            imageUrl: '/stories/product-image.jpg'
        },
        {
            id: 'second-product',
            brand: 'Acer',
            model: 'neoTouch',
            price: 210,
            imageUrl: '/stories/product-image.jpg'
        },
        {
            id: 'third-product',
            brand: 'alcatel',
            model: 'Flash (2017)',
            price: null,
            imageUrl: '/stories/product-image.jpg'
        },
        {
            id: 'fourth-product',
            brand: 'Acer',
            model: 'beTouch E210',
            price: 150,
            imageUrl: '/stories/product-image.jpg'
        },
        {
            id: 'fifth-product',
            brand: 'Acer',
            model: 'Iconia Tab',
            price: 200,
            imageUrl: '/stories/product-image.jpg'
        }
    ]
}

export const Empty = (args) => Builder(args)
Empty.args = {
    products: []
}
