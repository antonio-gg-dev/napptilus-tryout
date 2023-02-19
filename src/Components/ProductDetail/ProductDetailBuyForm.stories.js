import {ProductDetailBuyForm} from "./ProductDetailBuyForm";
import {ProductDetail} from "../../Entities/ProductDetail";
import {Color} from "../../Entities/VO/Color";
import {Storage} from "../../Entities/VO/Storage";
import {withReactContext} from "storybook-react-context";
import {CartCountContext} from "../../Contexts/CartCountContext";

export default {
    component: ProductDetailBuyForm,
    decorators: [withReactContext({
        Context: CartCountContext,
        initialState: {
            cartCount: 0,
            setCartCount: () => {}
        },
    })],
    argTypes: {
        price: { type: 'number' },
        storages: { control: 'object' },
        colors: { control: 'object' },
    },
}

const Builder = (args) => {
    const product = new ProductDetail(
        'some-id',
        'Some Brand',
        'Some Model',
        args.price,
        'Some CPU',
        'Some RAM',
        'Some OS',
        'Some Display Resolution',
        'Some Battery',
        'Some Primary Camera',
        'Some Secondary Camera',
        'Some Dimensions',
        'Some Weight',
        args.storages.map((storage, index) => new Storage(index, storage)),
        args.colors.map((color, index) => new Color(index, color)),
        ''
    )

    return <div className="w-[30rem]">
        <ProductDetailBuyForm
            product={product}
        />
    </div>
}

export const Default = (args) => Builder(args)
Default.args = {
    price: 195,
    colors: [
        'Black',
        'White',
        'Silver',
    ],
    storages: [
        '16 GB',
        '32 GB',
    ]
}

export const SoldOut = (args) => Builder(args)
SoldOut.args = {
    price: null,
    colors: [
        'Black',
        'White',
        'Silver',
    ],
    storages: [
        '16 GB',
        '32 GB',
    ]
}
