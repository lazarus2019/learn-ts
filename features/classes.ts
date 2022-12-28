class Vehicle {
  color: string = 'red';

  // instantly execute when create new instance
  constructor(color: string) {
    this.color = color;
  }
  // shortcut way for pass argument to constructor
  //   constructor(public color: string){}

  //   public drive(): void {
  //     console.log('vroom vroom');
  //   }

  protected hook(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.hook();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // super parent's props
  }

  // override extends props
  private drive(): void {
    console.log('chugga');
  }

  startDrivingProcess(): void {
    this.drive();
    this.hook();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
// car.hook();
