const solution = (arr1, arr2) => {
    return arr1.map((item, i) => item.map((_, j) => arr1[i][j] + arr2[i][j]));
}