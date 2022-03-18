import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName()
  }
}
