/**
* 문제 해결 시나리오
* 1. 각 대기실을 순회하며 'P' 좌표와 인접한 상/하/좌/우에 'P'가 있는 경우,
*    해당 대기실은 거리두기를 지키지 않은 것으로 간주
*/
const solution = (places) => {
    // 상/하/좌/우 정의
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    /**
    * checkRoom: 전달받은 대기실이 거리두기를 지키고 있는지 판별하는 함수
    * @param(places): 문자열 배열
    */
    const checkRoom = (room) => {
        // BFS 알고리즘 활용
        const isSafe = (R, C) => {
            const visited = Array.from({length: 5}, () => Array(5).fill(false));
            const queue = [[R, C, 0]]; // [row, col, dist]
            visited[R][C] = true;
            
            while(queue.length) {
                const [currX, currY, dist] = queue.shift();
                
                if(dist >= 2) continue;
                
                for(let i = 0; i < 4; i++) {
                    const nx = currX + dx[i];
                    const ny = currY + dy[i];

                    // 경계 감지
                    if(nx < 0 || ny < 0 || nx > 4 || ny > 4) continue;
                    
                    // 이미 방문한 노드라면 다음 방향 탐색
                    if(visited[nx][ny]) continue;

                    // 파티션이면 진행 불가
                    if(room[nx][ny] === 'X') continue;

                    // 인접한 상/하/좌/우에 'P'가 있으면 거리두기를 지키지 않은 것으로 간주
                    if(room[nx][ny] === 'P') return false;

                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
            return true;
        }
        
        for(let R = 0; R < room.length; R++) {
            for(let C = 0; C < room[R].length; C++) {
                if(room[R][C] === 'P') {
                    if(!isSafe(R, C)) return 0;
                }
            }
        }
        
        return 1;
    }
    
    return places.map(place => checkRoom(place));
}