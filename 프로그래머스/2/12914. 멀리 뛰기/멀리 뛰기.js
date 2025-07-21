const solution = (n) => {
    let a = 1, b = 2, c = 0;
    
    for(let i = 3; i <= n; i++) {
        c = (a + b) % 1234567;
        a = b;
        b = c;
    }
    
    return n < 3 ? n : c;
}