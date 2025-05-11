const factorial = (number) => {
    let i = 1n;
    let factorialNumber = 1n;
    
    while(i <= number) {
        factorialNumber *= i++;
    }
    
    return factorialNumber;
}

const solution = (balls, share) => {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}   