// Interfaces+Classes= how we get really strong code reuse in TS

/* Interfaces: create a new type, describing the property 
names and value types of an object */

interface Vehicle {
    name: string;
    year: number;
    broken: boolean
    summary(): string
}
interface Reportable {
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printVehicle = (vehicle: {
    name: string; year: number; broken: boolean
}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Name: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic)

const printSummaryInterface = (item: Reportable): void => {
    console.log(item.summary());
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}
printSummaryInterface(drink)

/* 
General Strategy for Reusable Code in TS:
Creat functions that accept arguments that are typed with interfaces
Objects/classes can decide to 'implement' a given interface to work with a function
*/

