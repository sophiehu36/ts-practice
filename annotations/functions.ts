// 返回值不写annotation, ts会根据return值自动生成, 但如果没有return关键字，会生成void
// 写annotation可以提醒你未正确返回值
// const add = (a: number, b: number) => {
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    //未写return关键字会返回void
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

// void : will be no returned value for this function
const logger = (message: string): void => {
    console.log(message);
    // return 'sdass' // not allowed to return such value
};

// :never funcition shall not return anything ever
// const throwError = (message: string): never => {
//     throw new Error(message);
// };
const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const todayWeather = {
    date: new Date(),
    weather: "sunny",
};

//ES2015 destructure
const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todayWeather);
