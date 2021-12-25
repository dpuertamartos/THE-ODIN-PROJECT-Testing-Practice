import caesar from "./CaesarCipher.js"

test("caesar cypher works with different shifting numbers", ()=>{
    expect(caesar("hola", 1)).toBe("ipmb");
    expect(caesar("hola", 5)).toBe("mtqf");
    expect(caesar("hola amigos , es esto cierto?", 5)).toBe("mtqf frnltx , jx jxyt hnjwyt?");
})

test("caesar cypher works with punctuation", ()=>{
    expect(caesar("hola amigos , es esto cierto?", 5)).toBe("mtqf frnltx , jx jxyt hnjwyt?");
})

test("caesar cypher works from z to a", ()=>{
    expect(caesar("zwyxxzzabc", 5)).toBe("ebdcceefgh");
})

test("caesar cypher works keeping the same case", ()=>{
    expect(caesar("HoLa AmIgOs", 5)).toBe("MtQf FrNlTx");
})