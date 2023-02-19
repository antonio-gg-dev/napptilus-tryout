import {ProductListItem} from "./ProductListItem";
import {ProductSummary} from "../../Entities/ProductSummary";
import {withRouter} from "storybook-addon-react-router-v6";

export default {
    component: ProductListItem,
    decorators: [withRouter],
    argTypes: {
        id: { type: 'string' },
        brand: { type: 'string' },
        model: { type: 'string' },
        price: { type: 'number' },
        imageUrl: { type: 'string' },
    },
}

const Builder = (args) => {
    const product = new ProductSummary(
        args.id,
        args.brand,
        args.model,
        args.price,
        args.imageUrl,
    )

    return (
        <div className="w-64">
            <ProductListItem
                product={product}
            />
        </div>
    )
}

export const Default = (args) => Builder(args)
Default.args = {
    id: 'some-id',
    brand: 'Acer',
    model: 'Predator 8',
    price: 350,
    imageUrl: '/stories/product-image.jpg',
}

export const SoldOutProduct = (args) => Builder(args)
SoldOutProduct.args = {
    id: 'some-id',
    brand: 'Acer',
    model: 'Predator 8',
    price: null,
    imageUrl: '/stories/product-image.jpg',
}
