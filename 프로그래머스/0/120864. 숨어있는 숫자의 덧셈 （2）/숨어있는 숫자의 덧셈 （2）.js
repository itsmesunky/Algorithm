function solution(my_string) {
    return my_string.split(/[^0-9]/).filter(item => item !== "").reduce((sum, item) => sum += +item, 0)
}