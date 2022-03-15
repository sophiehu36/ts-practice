class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  //  constructor 构造函数，创建实例时自动执行
  // 传入的参数会成为public color属性
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // super passes color to Vehicle the parent
    super(color);
  }
  // overwrite the drive function in Vehicle
  private drive(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, "red");
car.startDrivingProcess();
