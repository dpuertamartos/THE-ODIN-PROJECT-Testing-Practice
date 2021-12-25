import reverseString from "./ReverseString.js"

test("Function takes a string and returns it reversed", ()=>{
    expect(reverseString("HOLA")).toBe("ALOH");
    expect(reverseString("hola AMIGos")).toBe("soGIMA aloh");
})

test("Function still works with numbers and random characters", ()=>{
    expect(reverseString("HOL32")).toBe("23LOH");
    expect(reverseString("hola AMIGO??32")).toBe("23??OGIMA aloh");
})