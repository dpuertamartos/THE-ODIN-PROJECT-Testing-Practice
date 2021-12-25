const newIndex = (n1,n2) => {
    return (n1+n2>24===true ? n1+n2-26 : n1+n2)
}

const checkUpper = (c) => {
    return c.toUpperCase() === c
}

const caesar = (string, switchNumber) => {
    const cachestring = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    for(let c of string){
        const index = cachestring.indexOf(c.toLowerCase())
        const newI = newIndex(index,switchNumber)
        if(index!==-1){
            checkUpper(c) === true
                ? result+=cachestring[newI].toUpperCase()
                : result+=cachestring[newI].toLowerCase()
        }
        else{
            result+=c
        }
    }
    return result
}
export default caesar;