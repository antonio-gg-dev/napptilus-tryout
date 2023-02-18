import {ProductList} from "./ProductList";
import {ProductSummary} from "../../Entities/ProductSummary";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    component: ProductList,
    decorators: [withRouter]
}

const Template = (args) => {

    return (
        <ProductList
            {...args}
        />
    )
}

export const Default = {
    args: {
        products: [
            new ProductSummary(
                'first-product',
                'Acer',
                'Predator 8',
                350,
                '/stories/product-image.jpg'
            ),
            new ProductSummary(
                'second-product',
                'Acer',
                'neoTouch',
                210,
                '/stories/product-image.jpg'
            ),
            new ProductSummary(
                'third-product',
                'alcatel',
                'Flash (2017)',
                null,
                '/stories/product-image.jpg'
            ),
            new ProductSummary(
                'fourth-product',
                'Acer',
                'beTouch E210',
                150,
                '/stories/product-image.jpg'
            ),
            new ProductSummary(
                'fifth-product',
                'Acer',
                'Iconia Tab',
                200,
                '/stories/product-image.jpg'
            ),
        ]
    }
}

export const Empty = {
    args: {
        products: []
    }
}
