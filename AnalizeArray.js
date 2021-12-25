const analize = (array) => {
    if(Array.isArray(array)===false){return null}
    const calcAverage = (array.reduce((a,b)=>a+b, 0))/array.length
    const newObject =  {
        average: calcAverage,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
    return newObject
}

export default analize;