import calculator from "./Calculator.js"

test("calculator function adds two numbers", ()=>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.add(7,1)).toBe(8);
})

test("calculator function substracts two numbers", ()=>{
    expect(calculator.substract(2,3)).toBe(-1);
    expect(calculator.substract(7,1)).toBe(6);
    expect(calculator.substract(7,"hola")).toBe(NaN);
})

test("calculator function multiplies two numbers", ()=>{
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.multiply(7,1)).toBe(7);
    expect(calculator.multiply(8,"hola")).toBe(NaN);
})

test("calculator function divides two numbers", ()=>{
    expect(calculator.divide(8,4)).toBe(2);
    expect(calculator.divide(1,4)).toBe(0.25);
    expect(calculator.divide(8,"hola")).toBe(NaN);
})