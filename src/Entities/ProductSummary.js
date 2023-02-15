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
        this.id = id.toString()
        this.brand = brand.toString()
        this.model = model.toString()
        this.price = Number(price) || null
        this.imageUrl = imageUrl
    }

    get name() {
        return `${this.brand} ${this.model}`
    }

    get imageAlt () {
        return `Imagen del "${this.name}".`
    }

    get humanPrice () {
        if (this.soldOut) {
            return
        }

        return `${this.price.toFixed(2)} €`
    }

    get soldOut () {
        return !this.price
    }
}
