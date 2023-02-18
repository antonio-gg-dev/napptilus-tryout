export class ProductDetail {
    id;
    brand;
    model;
    price;
    cpu;
    ram;
    os;
    displayResolution;
    battery;
    primaryCamera;
    secondaryCamera;
    dimensions;
    weight;
    storages;
    colors;
    imageUrl;

    /**
     * @param id {string}
     * @param brand {string}
     * @param model {string}
     * @param price {number | null}
     * @param cpu {string}
     * @param ram {string}
     * @param os {string}
     * @param displayResolution {string}
     * @param battery {string}
     * @param primaryCamera {string}
     * @param secondaryCamera {string}
     * @param dimensions {string | null}
     * @param weight {number}
     * @param storages {Storage[]}
     * @param colors {Color[]}
     * @param imageUrl {string}
     */
    constructor(
        id,
        brand,
        model,
        price,
        cpu,
        ram,
        os,
        displayResolution,
        battery,
        primaryCamera,
        secondaryCamera,
        dimensions,
        weight,
        storages,
        colors,
        imageUrl,
    ) {
        this.id = String(id)
        this.brand = String(brand)
        this.model = String(model)
        this.price = Number(price) || null
        this.cpu = String(cpu)
        this.ram = String(ram)
        this.os = String(os)
        this.displayResolution = String(displayResolution)
        this.battery = String(battery)
        this.primaryCamera = String(primaryCamera)
        this.secondaryCamera = String(secondaryCamera)
        this.dimensions = dimensions ? String(dimensions) : null
        this.weight = String(weight)
        this.storages = [...storages]
        this.colors = [...colors]
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

    get humanWeight () {
        return `${this.weight} gr`
    }
}
