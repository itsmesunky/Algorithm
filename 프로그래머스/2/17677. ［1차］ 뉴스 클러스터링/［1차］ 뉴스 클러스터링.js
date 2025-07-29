// 문자열들을 두 글자씩 끊어서 배열을 만들어주는 함수
const separateStr = (str) => {
    // 문자열로만 이루어졌는지 검사할 정규식
    const regExp = /^[a-z|A-Z]+$/;
    const arr = [];
    
    for(let i = 0; i < str.length - 1; i++) {
        const newStr = str.substring(i, i + 2);
        if(regExp.test(newStr)) {
	        arr.push(newStr.toUpperCase());
        }
    }
    
    return arr;
}

const solution = (str1, str2) => {
    let obj = {}; // 문자열: 갯수
    
    let union = 0; // 합집합 갯수
    let intersection = 0; // 교집합 갯수
    
    // 문자열들을 두 글자씩 끊어 만든 배열
    let str1Arr = separateStr(str1);
    let str2Arr = separateStr(str2);
    
    str1Arr.concat(str2Arr).forEach(v => obj[v] = (obj[v] ?? 0) + 1);
    
    for(const key of Object.keys(obj)) {
        if(obj[key] >= 2) { // 중복 원소가 있을 때
            let left = str1Arr.filter(v => v === key).length ?? 0;
            let right = str2Arr.filter(v => v === key).length ?? 0;
            
            if(left && right) {
                union += Math.max(left, right);
                intersection += Math.min(left, right);
            } else {
                union += obj[key];
            }
        } else { // 중복 원소가 없을 때
            union++;
        }
    }
    
    return !union && !intersection ? 65536 : Math.floor((intersection / union) * 65536);
}