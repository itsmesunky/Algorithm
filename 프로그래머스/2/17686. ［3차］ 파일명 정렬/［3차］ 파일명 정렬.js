/**
* separateString: 문자열이 주어지면 head, number, tail로 분리해주는 헬퍼 함수
* param(str): 분리를 원하는 문자열
*/
const separateString = (str) => {
    let head = '';
    let number = '';
    let tail = '';
    
    for(const char of str) {
        const isNaN = Number.isNaN(+char) || char === " ";
        
        if(isNaN && !number.length) {
            head += char;
        } else if(!isNaN && number.length < 5 && !tail.length) {
            number += char;
        } else {
            tail += char;
        }
    }
    
    return [head, number, tail];
}

const solution = (files) => {
    return files.map(file => separateString(file))
                .sort(([headA, numberA], [headB, numberB]) => {
                    if(headA.toLowerCase() === headB.toLowerCase()) { // 두 문자열이 같을 때
                        return parseInt(numberA) - parseInt(numberB);
                    } else { // 두 문자열이 다를 때 
                        return headA.localeCompare(headB, 'en-US', {sensitivity: 'base'});
                    }
                })
                .map(v => v.join(''));
}