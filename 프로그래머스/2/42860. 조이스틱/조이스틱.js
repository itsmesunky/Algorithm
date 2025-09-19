const solution = (name) => {
    const len = name.length;
    
    // ▲, ▼ 최소 조작 횟수
    const upAndDown = [...name].reduce((acc, cur) => {
        const charCode = cur.charCodeAt();
        return acc + Math.min(charCode - 65, 91 - charCode);
    }, 0);
    
    // ◀, ▶ 최소 조작 횟수
    let leftAndRight = len - 1; // default: 직진
    for(let cursor = 0; cursor < len; cursor++) {
        let next = cursor + 1;
        while(next < len && name[next] === 'A') {
            next++;
        }
        
        // 문자열 끝에서부터 다음 문자까지의 거리
        const fromEnd = len - next;
        
        // 다음 문자까지의 직진 거리, 우회 거리 중 최소값 선택
        leftAndRight = Math.min(leftAndRight, cursor + (len - next) + Math.min(cursor, len - next));
    }
    
    return upAndDown + leftAndRight;
}