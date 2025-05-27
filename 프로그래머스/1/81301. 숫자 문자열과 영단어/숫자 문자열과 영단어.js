const solution = (s) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    words.forEach((item, i) => s = s.replaceAll(item, i));
    
    return +s;
}