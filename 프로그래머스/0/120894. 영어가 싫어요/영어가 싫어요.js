const solution = (numbers) => {
    let strNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let answer = "";
    let str = "";
    
    for(let i = 0; i < numbers.length; i++) {
        str += numbers[i];
        
        if(strNumbers.includes(str)) {
            answer += strNumbers.indexOf(str);
            str = "";
        }
    }
    
    return +answer;
}