import {fireEvent, render, screen} from "@testing-library/react";
import {ProductDetailColorPicker} from "./ProductDetailColorPicker";
import {Color} from "../../Entities/VO/Color";

describe('src/Components/ProductDetail/ProductDetailColorPicker.js', () => {
    it('should print one input for each color', () => {
        const colors = [
            new Color(4000, 'White'),
            new Color(4001, 'Black'),
        ]

        render(
            <ProductDetailColorPicker
                colors={colors}
                activeColorCode={colors[0].code}
                setActiveColorCode={() => {}}
            />
        )

        expect(screen.getAllByTestId('color-input').length).toBe(2)
    })

    it('should mark as checked the color with activeColorCode', () => {
        const colors = [
            new Color(4000, 'White'),
            new Color(4001, 'Black'),
        ]

        render(
            <ProductDetailColorPicker
                colors={colors}
                activeColorCode={colors[1].code}
                setActiveColorCode={() => {}}
            />
        )

        expect(screen.getAllByTestId('color-input')[0]).not.toHaveAttribute('checked')
        expect(screen.getAllByTestId('color-input')[1]).toHaveAttribute('checked')
    })

    it('should call setActiveColorCode when color is clicked', () => {
        const colors = [
            new Color(4000, 'White'),
            new Color(4001, 'Black'),
        ]
        const setActiveColorCode = jest.fn()

        render(
            <ProductDetailColorPicker
                colors={colors}
                activeColorCode={colors[1].code}
                setActiveColorCode={setActiveColorCode}
            />
        )

        const input = screen.getAllByTestId('color-input')[0]

        fireEvent.click(input)

        expect(setActiveColorCode).toHaveBeenCalledWith(4000)
    })
})
