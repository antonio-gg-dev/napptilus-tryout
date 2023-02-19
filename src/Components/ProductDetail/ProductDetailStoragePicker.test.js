import {fireEvent, render, screen} from "@testing-library/react";
import {ProductDetailStoragePicker} from "./ProductDetailStoragePicker";
import {Storage} from "../../Entities/VO/Storage";

describe('src/Components/ProductDetail/ProductDetailStoragePicker.js', () => {
    it('should print one input for each storage', () => {
        const storages = [
            new Storage(3032, '32 GB'),
            new Storage(3064, '64 GB'),
        ]

        render(
            <ProductDetailStoragePicker
                storages={storages}
                activeStorageCode={storages[0].code}
                setActiveStorageCode={() => {}}
            />
        )

        expect(screen.getAllByTestId('storage-input').length).toBe(2)
    })

    it('should mark as checked the storage with activeStorageCode', () => {
        const storages = [
            new Storage(3032, '32 GB'),
            new Storage(3064, '64 GB'),
        ]

        render(
            <ProductDetailStoragePicker
                storages={storages}
                activeStorageCode={storages[1].code}
                setActiveStorageCode={() => {}}
            />
        )

        expect(screen.getAllByTestId('storage-input')[0]).not.toHaveAttribute('checked')
        expect(screen.getAllByTestId('storage-input')[1]).toHaveAttribute('checked')
    })

    it('should call setActiveStorageCode when storage is clicked', () => {
        const storages = [
            new Storage(3032, '32 GB'),
            new Storage(3064, '64 GB'),
        ]
        const setActiveStorageCode = jest.fn()

        render(
            <ProductDetailStoragePicker
                storages={storages}
                activeStorageCode={storages[1].code}
                setActiveStorageCode={setActiveStorageCode}
            />
        )

        const input = screen.getAllByTestId('storage-input')[0]

        fireEvent.click(input)

        expect(setActiveStorageCode).toHaveBeenCalledWith(3032)
    })
})
