const solution = (n) => {
    let a = 0, b = 1;
    
    for(let i = 2; i <= n; i++) {
        const next = (a + b) % 1234567;
        a = b;
        b = next;
    }
    
    return b;
}