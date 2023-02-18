export class Storage {
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
}
