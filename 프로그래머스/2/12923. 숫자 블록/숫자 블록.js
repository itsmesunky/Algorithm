/**
* 문제 해결 시나리오
* 1. 특정 위치에 최종적으로 쌓이는 블럭은 해당 블럭의 루트 값임
*/
const solution = (begin, end) => {
    const arr = [];
    
    for(let i = begin; i <= end; i++) {
        if(i === 1) {
            arr.push(0);
            continue;
        } else if(i === 2 || i === 3) {
            arr.push(1);
            continue;
        }
        for(let j = 2; j <= 1000000000; j++) {
            if(!(i % j)) {
                arr.push(j);
                break;
            }
        }
    }
    
    console.log(arr);
}
