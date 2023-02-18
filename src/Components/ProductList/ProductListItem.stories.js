import {ProductListItem} from "./ProductListItem";
import {ProductSummary} from "../../Entities/ProductSummary";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    component: ProductListItem,
    decorators: [withRouter]
}

const Template = (args) => {

    return (
        <ProductListItem
            {...args}
        />
    )
}

export const Default = {
    args: {
        product: new ProductSummary(
            'some-id',
            'Acer',
            'Predator 8',
            350,
            '/stories/product-image.jpg'
        )
    }
}

export const SoldOutProduct = {
    args: {
        product: new ProductSummary(
            'some-id',
            'Acer',
            'Predator 8',
            null,
            '/stories/product-image.jpg'
        )
    }
}
