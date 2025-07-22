const solution = (want, number, discount) => {
    let answer = 0;
    
    for(let i = 0; i <= discount.length - 10; i++) {
        let arr = discount.slice(i, i + 10);
        let isAble = true;
        
        for(let j = 0; j < want.length; j++) {
            if(arr.filter(dis => dis === want[j]).length !== number[j]) {
                isAble = false;
                break;
            }
        }
        
        !isAble || answer++;
    }
    
    return answer;
}