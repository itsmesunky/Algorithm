const solution = (a, b, n) => {
    let remain = n;
    let result = 0;
    
    while(remain >= a) {
        let receive = parseInt(remain / a) * b;
        result += receive;
        remain = receive + (remain % a);
    }
    
    return result;
}