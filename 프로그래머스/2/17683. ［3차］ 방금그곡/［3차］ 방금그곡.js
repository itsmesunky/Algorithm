/**
* 문제 해결 시나리오
* 1. musicinfos 배열 순회
* 2. 재생 시간과 악보 길이 비교
* 2.1 재생 시간보다 악보 길이가 긴 경우 악보 자르기
* 2.2 재생 시간보다 악보 길이가 짧은 경우 악보 반복
* 3. m과 정확하게 일치하는 부분이 있으면 정답 후보에 넣기 (후보 형식: [재생 시간, 음악 제목])
* 3.1 후보에 넣을 때 재생 시간 비교
* 3.2 현재의 후보가 후보 배열에 있는 음악의 재생 시간보다 길면 후보 배열 초기화 후 넣기
* 3.3 같으면 continue
*/

/**
* computePlayTime: 'HH:MM' 형식의 문자열 두 개를 전달받아 재생시간을 분 단위로 반환해주는 함수
* @param(strStart): 'HH:MM' 형식의 시작 시간 문자열
* @param(strEnd): 'HH:MM' 형식의 종료 시간 문자열
*/
const computePlayTime = (strStart, strEnd) => {
    const [startH, startM] = strStart.split(":").map(Number);
    const [endH, endM] = strEnd.split(":").map(Number);
    
    const numStart = startH * 60 + startM;
    const numEnd = endH * 60 + endM;
    
    return numEnd - numStart;
}

/**
* replaceSharp: 문자열 내 '문자#' 형식의 문자열을 다른 문자로 치환해주는 함수
* @param(str): '문자#'이 포함된 문자열
*/
const replaceSharp = (str) => {
    return str.replaceAll(/A#/g, 'H')
              .replaceAll(/B#/g, 'I')
              .replaceAll(/C#/g, 'J')
              .replaceAll(/D#/g, 'K')
              .replaceAll(/E#/g, 'L')
              .replaceAll(/F#/g, 'M')
              .replaceAll(/G#/g, 'N');
}

const solution = (m, musicinfos) => {
    // [[재생 시간, 음악 제목]]
    const answer = [0, "(None)"];
    
    const replacedM = replaceSharp(m);
    
    for(const musicinfo of musicinfos) {
        const [start, end, subject, sheet] = musicinfo.split(',');
        
        // 악보
        let replaceSheet = replaceSharp(sheet);
        
        // 악보 길이
        const len = replaceSheet.length;
        
        // 재생 시간
        const playTime = computePlayTime(start, end);
        
        // 악보 조정
        if(playTime < len) { // 재생 시간보다 악보가 긴 경우
            replaceSheet = replaceSheet.slice(0, playTime);
        } else if(playTime > len) { // 재생 시간보다 악보가 짧은 경우
            const [i, j] = [Math.floor(playTime / len), (playTime % len)];
            replaceSheet = replaceSheet.repeat(i) + replaceSheet.slice(0, j);
        }
        
        if(replaceSheet.includes(replacedM)) {
            if(answer[0] < playTime) {
                [answer[0], answer[1]] = [playTime, subject];
            }
        }
    }
    
    return answer[1];
}