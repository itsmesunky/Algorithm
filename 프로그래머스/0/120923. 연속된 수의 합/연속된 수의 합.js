const solution = (num, total) => {
    return Array.from({length: num}).fill(parseInt(total/num)).map((v, i) => num % 2 === 0 ? v + (i - parseInt(num / 2 - 1)) : v + (i - parseInt(num / 2)))
}