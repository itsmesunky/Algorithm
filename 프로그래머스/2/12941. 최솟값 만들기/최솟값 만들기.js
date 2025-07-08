const solution = (A, B) => {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((sum, cur, i) => sum += cur * B[i], 0);
}