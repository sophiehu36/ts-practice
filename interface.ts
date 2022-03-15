//reusable type
interface Reportable {
  // name: string;
  // year: Date; //   not limited to primitive types
  // broken: boolean;
  summary(): string; // Anything that wants to be a Vehicle must have a function called summary that returns a string.
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    //function returns a string
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name:${item.name}`);
  // console.log(`Year:${item.year}`);
  // console.log(`Broken:${item.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
