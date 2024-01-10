/* 
Classes: Blueprint to create an object with some fields
(values) and methods(functions) to represent a 'thing
*/

class Vehicle {

    // color: string;
    constructor(public color: string) {
        // this.color = color;
    }

    drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    // override drive
    constructor(public wheels: number, color: string) {
        super(color)
    }
    drive(): void {
        console.log('vroom');
    }
    startDriving(): void {
        console.log('start driving');
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange');

vehicle.drive()
// vehicle.honk()

const car = new Car(4, 'red');

car.drive()
// car.honk()
car.startDriving()
console.log('color :', car.color);

/* Modifiers are a keyword so we can place on different
methods and properties inside of a class


public: This method can be called any where, any time
private: This method can only be called by other methods in this class
Protected: This method can be called by other methods in this class,
or by other methods in child classes
*/