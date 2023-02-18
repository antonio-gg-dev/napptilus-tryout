export class Breadcrumb {
    name;
    url = null;

    /**
     * @param name {string}
     * @param url {string | null}
     */
    constructor(name, url = null) {
        this.name = name;
        this.url = url;
    }
}
