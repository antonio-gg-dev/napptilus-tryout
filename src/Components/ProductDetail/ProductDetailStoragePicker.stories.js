import {ProductDetailStoragePicker} from "./ProductDetailStoragePicker";
import {Storage} from "../../Entities/VO/Storage";
import {useArgs} from "@storybook/client-api";

export default {
    component: ProductDetailStoragePicker,
    argTypes: {
        storages: { control: 'object' },
        activeStorageCode: { type: 'number' },
    },
}

const Builder = (args) => {
    const [{activeStorageCode}, updateArgs] = useArgs()
    const setActiveStorageCode = (activeStorageCode) => updateArgs({ activeStorageCode })
    const storages = args.storages.map((storage, index) => new Storage(index, storage))

    return <div className="w-[30rem]">
        <ProductDetailStoragePicker
            storages={storages}
            activeStorageCode={activeStorageCode}
            setActiveStorageCode={setActiveStorageCode}
        />
    </div>
}

export const Default = (args) => Builder(args)
Default.args = {
    storages: [
        '64 GB',
        '128 GB',
        '256 GB',
    ],
    activeStorageCode: 0,
}

export const SecondStorageActivated = (args) => Builder(args)
SecondStorageActivated.args = {
    storages: [
        '16 GB',
        '32 GB',
    ],
    activeStorageCode: 1,
}

export const Wrapping = (args) => Builder(args)
Wrapping.args = {
    storages: [
        '256k',
        '512k',
        '1024k',
        '2048k',
    ],
    activeStorageCode: 0,
}
