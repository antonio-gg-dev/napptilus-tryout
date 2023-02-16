export class ProductSummary {
    id;
    brand;
    model;
    price;
    imageUrl;

    /**
     * @param id {string}
     * @param brand {string}
     * @param model {string}
     * @param price {number | null}
     * @param imageUrl {string}
     */
    constructor(
        id,
        brand,
        model,
        price,
        imageUrl,
    ) {
        this.id = String(id)
        this.brand = String(brand)
        this.model = String(model)
        this.price = Number(price) || null
        this.imageUrl = String(imageUrl)
    }

    get name() {
        return `${this.brand} ${this.model}`
    }

    get imageAlt () {
        return `Imagen del "${this.name}".`
    }

    get humanPrice () {
        if (this.soldOut) {
            return null
        }

        return `${this.price.toFixed(2)} €`
    }

    get soldOut () {
        return !this.price
    }
}
