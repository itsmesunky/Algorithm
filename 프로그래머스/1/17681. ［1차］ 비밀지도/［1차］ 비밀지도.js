const solution = (n, arr1, arr2) => {
    return arr1.map((num, i) => {
        const binary = (num | arr2[i]).toString(2).padStart(n, 0);
        return [...binary].map((char) => char === '0' ? " " : "#").join('');
    })
}