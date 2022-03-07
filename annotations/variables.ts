// const apples: number = 5  //不允许变更变量的值

let apples = 5; //允许变更变量的值 //定义变量时初始化，typescript会自动获取数据类型
// apples = 10; //但值的类型仍然是number
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"]; //string[] 只含有string类型元素的数组
let myNumbers: number[] = [0, 2, 3];
let truths: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Function
// :(i:number) => void 注释，传入类型为number的参数i, void代表不返回任何值
const logNumber: (i: number) => void = (i: number) => {  
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); //JSON.parse()可能返回多种类型，ts不能预测，默认为any类型
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
