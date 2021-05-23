class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    plugInfo() {
        //return this.isPlugged
        console.log(this.name+"-"+this.isPlugged)
    }
    plugON(){
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }
    plugOFF(){
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}


class Lamp extends ElectricalAppliance {
    constructor(lamptype, name, power) {
        super(name, power);
        //this.isPlugged = false;
        this.lamptype = lamptype;
    }
}


class PC extends ElectricalAppliance {
    constructor(bodycolor, name, power) {
        super(name, power);
        //this.isPlugged = false;
        this.bodycolor = bodycolor;
    }
}

// экземпляр лампы
const LampExamp = new Lamp("LED", "LampLamp", "18W")

// экземпляр ПК
const PCExamp = new PC("Silver", "Win12PC", "400W")


// включить лампу в розетки
LampExamp.plugON()

// включить ПК в розетку
PCExamp.plugON()

// отключить лампу из розетки
LampExamp.plugOFF()

// результат
console.log(PCExamp)
console.log(LampExamp)