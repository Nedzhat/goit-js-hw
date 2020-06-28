class Car {
  static getSpecs(car) {
    return console.log(
      `Max Speed:${car.maxSpeed} Speed:${car.speed} IsON?:${car.isOn} Distance:${car.distance} Price:${car._price}`,
    );
  }

  constructor(object) {
    this.speed = 0;
    this._price = object.price;
    this.maxSpeed = object.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    let totalSpeed = this.speed + value;
    if (totalSpeed > this.maxSpeed) {
      totalSpeed = this.speed - value;
      console.log(`Нет возможности побить собственную ${this.maxSpeed}`);
    } else {
      this.speed = totalSpeed;
    }
  }

  decelerate(value) {
    let totalSpeed = this.speed - value;
    if (totalSpeed < 0) {
      totalSpeed = this.speed;
      console.log(`Скорость не может быть отрицательной!`);
    } else {
      this.speed = totalSpeed;
    }
  }

  drive(hours) {
    let totalDistance = 0;
    if (this.isOn) {
      totalDistance = hours * this.speed;
      this.distance += totalDistance;
    } else console.log(`Включите двигатель!`);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
