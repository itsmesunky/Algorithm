/**
* covertToSec - 'HH:MM:SS' 형태의 문자열을 초단위로 변환해주는 함수
* @param    {string} str - 'HH:MM:SS' 형태의 문자열
* @returns  {number} 초단위 숫자
*/
function convertToSec(str) {
    const [HH, MM, SS] = str.split(":").map(Number);
    return (HH * 3600) + (MM * 60) + SS;
}

/**
* convertToStr - 초단위 숫자를 'HH:MM:SS' 형태의 문자열로 변환해주는 함수
* @param    {number} sec - 초단위 수
* @returns  {string} 'HH:MM:SS' 형태의 문자열
*/
function convertToStr(sec) {
    const HH = String(Math.floor(sec / 3600)).padStart(2, '0');
    const MM = String(Math.floor(sec / 60) % 60).padStart(2, '0');
    const SS = String(sec % 60).padStart(2, '0');
    
    return `${HH}:${MM}:${SS}`;
}

const solution = (play_time, adv_time, logs) => {
    let answer = 0;
    
    const numPlayTime = convertToSec(play_time);
    const numAdvTime = convertToSec(adv_time);
    
    const times = Array(numPlayTime + 1).fill(0);
    
    for(const log of logs) {
        const [start, end] = log.split("-").map(convertToSec);
        
        // 이모스 알고리즘 적용
        times[start]++;
        times[end]--;
    }
    
    // 이모스 배열 정리
    for(let i = 1; i < numPlayTime; i++) {
        times[i] += times[i - 1];
    }
    
    // prefix sum
    for(let i = 1; i < numPlayTime; i++) {
        times[i] += times[i - 1];
    }
    
    let maxPlays = times[numAdvTime - 1];

    for(let right = numAdvTime; right <= numPlayTime; right++) {
        // 광고 시작 시간
        const start = right - numAdvTime;
        
        // 광고 구간 재생합(투 포인터)              
        const sum = times[right] - times[start];
        if(maxPlays < sum) {
            maxPlays = sum;
            answer = right - numAdvTime + 1;
        }
    }
    
    return convertToStr(answer);
}