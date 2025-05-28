const solution = (n, arr1, arr2) => {
    const map = Array.from({length: n}, () => Array(n).fill(0));
    
    arr1.forEach((num, i) => num.toString(2)
                                .padStart(n, 0)
                                .split('')
                                .forEach((bin, j) => map[i][j] = bin));
    
    arr2.forEach((num, i) => num.toString(2)
                                .padStart(n, 0)
                                .split('')
                                .forEach((bin, j) => map[i][j] === "1" ? map[i][j] = "1" : map[i][j] = bin));
    
    return map.map(arr => arr.reduce((acc, cur) => cur === "0" ? acc += " " : acc += "#", ""));
}