class ElDevice1 {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTurn = false;
    }

    plugIn() {
        console.log(this.name + " Включен");
        this.isTurn = true;
    }

    getPowerUsed() {
        return this.isTurn ? this.power : 0;
    }
}

const lamp = new ElDevice1('lamp', 10);
const comp = new ElDevice1('comp', 800);

console.log(lamp.getPowerUsed() + comp.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + comp.getPowerUsed());

comp.plugIn();
console.log(lamp.getPowerUsed() + comp.getPowerUsed());
