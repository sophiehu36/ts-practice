const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// string [][], string元素组成的嵌套数组
const carsByMake: string[][] = [];

// Help with inference when extrating values
// const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
