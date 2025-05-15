const isRelation3 = (num) => {
    if(num % 3 === 0 || (num + "").includes('3')) {
        return true;
    }
    
    return false;
}

const solution = (n) => {
    let not3Array = [];
    
    let num = 1;
    
    for(let i = 1; i <= 100; i++) {
        while(isRelation3(num)) {
            num++;
        }
        
        not3Array.push(num++);
    }
    
    return not3Array[n - 1];
}