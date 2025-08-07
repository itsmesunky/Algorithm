const solution = (n) => {
    if(n <= 2) return n;
    
    let a = 1, b = 2;

    for(let i = 3; i <= n; i++) {
        const next = (a + b) % 1000000007;
        a = b;
        b = next;
    }

    return b;
}