/**
* 문제 해결 시나리오
* 1. 각 대기실마다 'P'의 좌표를 저장
* 2. 'P'와 다른 'P'의 맨해튼 거리를 비교
* 2.1 거리가 1인 경우 해당 대기실은 거리두기를 지키지 않고 있으므로 0을 반환
* 2.2 거리가 2인 경우
* 2.2.1 같은 행 또는 열인 경우 가운데 값이 'X'인지 확인
* 2.2.2 다른 행열인 경우 대각선 값이 'X'인지 확인
*/
const solution = (places) => {
    /**
    * checkRoom: 매개변수로 문자열 배열을 받으면 해당 대기실이 거리두기를 지키고 있는지 여부를 반환하는 함수
    * @param(room): 문자열 배열
    */
    const checkRoom = (room) => {
        // 'P'의 좌표 저장
        const P = [];
        
        for(let R = 0; R < room.length; R++) {
            for(let C = 0; C < room[R].length; C++) {
                if(room[R][C] === 'P') {
                    P.push([R, C]);
                }
            }
        }
        
        for(let i = 0; i < P.length; i++) {
            for(let j = i + 1; j < P.length; j++) {
                // 현재 P의 좌표
                const [currX, currY] = P[i];
                // 다음 P의 좌표
                const [nextX, nextY] = P[j];
                
                // 두 좌표간 맨해튼 거리 계산
                const dist = Math.abs(currX - nextX) + Math.abs(currY - nextY);
                
                switch(dist) {
                    case 1:
                        return 0;
                    case 2:
                        if(currX === nextX) {
                            const midCol = (currY + nextY) / 2;
                            if(room[currX][midCol] !== 'X') {
                                return 0;
                            }
                        } else if(currY === nextY) {
                            const midRow = (currX + nextX) / 2;
                            if(room[midRow][currY] !== 'X') {
                                return 0;
                            }
                        } else {
                            if(!(room[currX][nextY] === 'X' && room[nextX][currY] === 'X')) {
                                return 0;
                            }
                        }
                }
            }
        }
        
        return 1;
    }
    
    return places.map(place => checkRoom(place));
}