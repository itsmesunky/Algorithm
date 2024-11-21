function solution(my_string, indices) {
    let chArr = [...my_string];
    indices.forEach((indice)=>{chArr[indice] = ""});
    return chArr.join("");
}