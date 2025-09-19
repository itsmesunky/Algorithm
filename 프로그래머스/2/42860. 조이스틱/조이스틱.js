const solution = (name) => {
    const len = name.length;
    
    // ▲, ▼ 최소 조작 횟수 계산
    const upAndDown = [...name].reduce((acc, cur) => {
        const charCode = cur.charCodeAt();
        return acc + Math.min(charCode - 65, 91 - charCode);
    }, 0);
    
    // ◀, ▶ 최소 조작 횟수 계산
    let leftAndRight = len - 1; // 기본값: 오른쪽으로만 이동
    
    for(let cursor = 0; cursor < len; cursor++) {
        // 다음으로 변경해야 할 문자의 위치
        let next = cursor + 1;
        
        // 'A' 스킵
        while(next < len && name[next] === 'A') {
            next++;
        }
        
        // 방법1. 다음 문자(next)까지 왔던 길을 다시 돌아간 후, 문자열의 끝에서부터 접근하는 경우
        const goRightThenLeft = cursor + cursor + (len - next);
        // 방법2. 아예 끝에서부터 다음 문자(next)까지 이동하고 현재 cursor까지 복귀하는 경우
        const goLeftThenRight = (len - next) + (len - next) + cursor;
        
        leftAndRight = Math.min(leftAndRight, goRightThenLeft, goLeftThenRight);
    }
    
    return upAndDown + leftAndRight;
};