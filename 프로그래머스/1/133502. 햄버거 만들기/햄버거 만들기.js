const solution = (ingredient) => {
    const arr = [];
    let answer = 0;
    let pos = 0;
    
    for(let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i]);
        
        if(arr.length > 3) {
            if(arr.slice(pos - 3).join('') === "1231") {
                answer++;
                arr.splice(pos - 3);
                pos -= 4;
            }
        }
        
        pos++;
    }
    
    return answer;
}