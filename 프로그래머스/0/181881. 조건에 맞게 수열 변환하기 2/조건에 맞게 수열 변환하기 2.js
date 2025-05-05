function solution(arr) {
    let copiedArr = [...arr];
    let isEquals = false;
    let answer = 0;
    
    while(!isEquals) {
        let newArr = [];
        
        for(const num of copiedArr) {
            if(num >= 50) {
                if(num % 2 === 0) {
                    newArr.push(num / 2);
                } else {
                    newArr.push(num);
                }
            } else {
                if(num % 2 !== 0) {
                    newArr.push(num * 2 + 1);
                } else {
                    newArr.push(num);
                }
            }
        }
        
        answer++;
        
        for(let i = 0; i < arr.length; i++) {
            if(copiedArr[i] !== newArr[i]) {
                copiedArr = newArr;
                break;
            } else {
                if(i === arr.length - 1) {
                    isEquals = true;
                }
            }
        }
        
    }
    
    return answer - 1;
}