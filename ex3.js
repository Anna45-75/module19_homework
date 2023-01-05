function ElDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isTurn = false;
}

ElDevice.prototype.plugIn = function () {
    console.log(this.name + " Включен");
    this.isTurn = true;
}

ElDevice.prototype.getPowerUsed = function () {
    return this.isTurn ? this.power : 0;
}


const lamp = new ElDevice('lamp', 10);
const comp = new ElDevice('comp', 800);

console.log(lamp.getPowerUsed() + comp.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + comp.getPowerUsed());

comp.plugIn();
console.log(lamp.getPowerUsed() + comp.getPowerUsed());
