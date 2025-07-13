const solution = (n) => {
    const cnt = n.toString(2).match(/1/g).length;
    let i = n + 1;
    
    while(true) {
        if(cnt === i.toString(2).match(/1/g).length) break;
        i++;
    }
    
    return parseInt(i);
}