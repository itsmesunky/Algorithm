const solution = (price, money, count) => {
    let i = 1;
    let total = 0;
    
    while(i <= count) {
        total += price * i++;
    }
    
    const diff = total - money;
    
    return diff > 0 ? diff : 0;
}