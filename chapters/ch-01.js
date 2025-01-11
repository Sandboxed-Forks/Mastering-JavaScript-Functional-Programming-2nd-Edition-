// Chapter 01

/* Questions */
const makeSoldierClass = salutation => class Soldier {
    constructor(name) {
        this.name = name;
    }
    salute(officer) {
        return `${this.name} says "${salutation}" to ${officer}`;
    }
}

export { makeSoldierClass }
