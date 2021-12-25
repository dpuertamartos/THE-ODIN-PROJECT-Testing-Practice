const reverseString = (string) => {
    let result = ""
    for(let i=string.length;i>0;i--){
        result+=string[i-1]
    }
    return result
}

export default reverseString;
