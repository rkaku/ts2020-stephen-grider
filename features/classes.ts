class Vehicle {
  // color: string = 'red';

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const yourCar = new Car(4, 'red');
yourCar.startDrivingProcess();
// yourCar.honk();
