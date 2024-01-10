/*
Classes: Blueprint to create an object with some fields
(values) and methods(functions) to represent a 'thing
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // color: string;
    function Vehicle(color) {
        this.color = color;
        // this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log('chugga chugga');
    };
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // override drive
    Car.prototype.drive = function () {
        console.log('vroom');
    };
    Car.prototype.startDriving = function () {
        console.log('start driving');
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle('orange');
vehicle.drive();
// vehicle.honk()
var car = new Car('red');
car.drive();
// car.honk()
car.startDriving();
console.log('color :', car.color);
/* Modifiers are a keyword so we can place on different
methods and properties inside of a class


public: This method can be called any where, any time
private: This method can only be called by other methods in this class
Protected: This method can be called by other methods in this class,
or by other methods in child classes
*/ 
