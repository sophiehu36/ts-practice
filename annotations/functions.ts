// 返回值不写annotation, ts会根据return自动生成, 但如果没有return关键字，会生成void
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
