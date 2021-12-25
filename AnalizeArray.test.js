import analize from "./AnalizeArray.js"

test("analize function takes an array of numbers and return an object", ()=>{
    const type = typeof analize([1,2,3])
    expect(type).toBe("object");
})

test("return correct average", ()=>{
    const result = analize([1,8,3,4,2,6])
    expect(result.average).toBe(4);
})

test("return correct min", ()=>{
    const result = analize([1,8,3,4,2,6])
    expect(result.min).toBe(1);
})

test("return correct max", ()=>{
    const result = analize([1,8,3,4,2,6])
    expect(result.max).toBe(8);
})

test("return correct length", ()=>{
    const result = analize([1,8,3,4,2,6])
    expect(result.length).toBe(6);
})

test("analize function gives error if you dont use an array", ()=>{
    const result = analize(1)
    expect(result).toBe(null);
})