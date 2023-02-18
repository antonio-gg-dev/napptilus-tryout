export class Color {
    code;
    name;

    /**
     * @param code {number}
     * @param name {string}
     */
    constructor(
        code,
        name
    ) {
        this.code = Number(code);
        this.name = String(name);
    }

    get cssColor () {
        const style = new Option().style
        style.color = this.name.toLowerCase()

        if (style.color === '') {
            return null
        }

        return style.color
    }
}
