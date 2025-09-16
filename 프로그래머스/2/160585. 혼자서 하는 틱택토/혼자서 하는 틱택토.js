/**
* 문제 해결 시나리오
* 1. board가 주어질 때, 게임 시작전인지 아닌지를 판단
* 2. 게임 시작전이 아니라면 문제 조건에 맞게 규칙을 지켰는지 판단
*/
const solution = (board) => {
    /**
    * isGameStart: 게임 시작 전인지 아닌지 판단해주는 함수
    */
    const isGameStart = () => {
        return !board.every(str => str === "...");
    }
    
    /**
    * isVictory: 특정 문자가 틱택토 게임에서 이겼는지 아닌지 판단해주는 함수
    * @param(char): 'O' 또는 'X'
    */
    const isVictory = (char) => {
        // 행 체크
        for(let row = 0; row < 3; row++) {
            if([...board[row]].every(v => v === char)) {
                return true;
            }
        }
        
        // 열 체크
        const cols = [[], [], []];
        board.forEach(str => [...str].forEach((char, i) => cols[i].push(char)));
        for(const arr of cols) {
            if(arr.every(v => v === char)) {
                return true;
            }
        }
        
        // 대각선 체크
        let col = 0;
        if(board.map(v => v[col++]).every(v => v === char)) return true;
        if(board.map(v => v[--col]).every(v => v === char)) return true;
        
        return false;
    }
    
    if(!isGameStart()) { // 게임 시작전인 경우
        return 1;
    } else {
        // board에서 O와 X의 개수 저장
        let O = 0, X = 0, E = 0;
        board.forEach(str => [...str].forEach(char => {
            if(char === 'O') {
                O++;
            } else if(char === 'X') {
                X++;
            } else {
                E++;
            }
        }));
                      
        // O와 X의 차이를 계산
        const diff = O - X;
        
        if(!diff) { // 둘의 개수가 같은 경우, 'O'가 이긴 이력이 있으면 안됨
            return isVictory('O') ? 0 : 1;
        } else { // 둘의 개수가 다른 경우에는
            if(diff > 1 || diff < 0) { // 음수 또는 2개 이상 차이나는 경우는 나올 수 없는 상황
                return 0;
            } else {
                if(isVictory('X')) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
    }
}