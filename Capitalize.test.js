import capitalize from "./Capitalize.js"

test("Function takes a string and returns it with the first character capitalized", ()=>{
    expect(capitalize("HOLA")).toBe("Hola");
    expect(capitalize("hola")).toBe("Hola");
    expect(capitalize("Hola AMIGos 3?")).toBe("Hola amigos 3?");
    expect(capitalize("1hola amigos")).toBe("1hola amigos");
})