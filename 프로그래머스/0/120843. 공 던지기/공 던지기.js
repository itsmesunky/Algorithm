const solution = (numbers, k) => {
    let count = 1;
    let newArray = Array.from(numbers);
    
    while(count < k) {
        newArray = newArray.slice(2).concat(newArray.slice(0, 2));
        count++;
    }
    
    return newArray[0];
}