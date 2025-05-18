const solution = (arr, query) => {
    query.forEach((item, i) => i % 2 === 0 ? arr.splice(item + 1) : arr.splice(0, item))
    
    return arr;
}