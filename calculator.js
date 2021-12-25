const calculator = (()=>{
    const add = (n1,n2) =>{
        let result = n1+n2
        return result
    }
    const substract = (n1,n2) =>{
        let result = n1-n2
        return result
    }
    const multiply = (n1,n2) =>{
        let result = n1*n2
        return result

    }
    const divide = (n1,n2) =>{
        let result = n1/n2
        return result
    }

    return {add,substract,multiply,divide}
})();


export default calculator;