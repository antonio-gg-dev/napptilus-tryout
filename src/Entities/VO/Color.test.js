import {Color} from "./Color";

describe('src/Entities/VO/Color.js', () => {
    describe('get cssColor', () => {
        it('should return null if color does not exists', () => {
            const color = new Color(0, 'Non Existent Color')

            expect(color.cssColor).toBe(null)
        })

        it.each`
            givenColor     | expectedColor
            ${'Red'}       | ${'red'}
            ${'HoneyDew'}  | ${'honeydew'}
            ${'#133746'}   | ${'rgb(19, 55, 70)'}
            ${'#F01'}      | ${'rgb(255, 0, 17)'}
        `(
            'should return css valid color "$expectedColor" when color "$givenColor" given',
            ({givenColor, expectedColor}
        ) => {
            const color = new Color(0, givenColor)

            expect(color.cssColor).toBe(expectedColor)
        })
    })
})
