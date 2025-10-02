/**
* getShortestMoves: 최단 경로로 도착 포인트까지 이동 좌표를 초 단위로 반환
* @param {number} startX: 출발 포인트 행
* @param {number} startY: 출발 포인트 열
* @param {number} endX: 도착 포인트 행
* @param {number} endY: 도착 포인트 열
* @returns number[][]: [[행, 열], [행, 열], ...] 형식의 2차원 배열
*/
const getShortestMoves = (startX, startY, endX, endY) => {
    const moves = [[startX, startY]];
    
    let currX = startX, currY = startY;

    while(currX !== endX || currY !== endY) {
        // r 좌표가 변하는 이동을 c 좌표가 변하는 이동보다 먼저 진행
        if(currX !== endX) {
            currX += currX < endX ? 1 : -1;
        } else {
            currY += currY < endY ? 1 : -1;
        }
        moves.push([currX, currY]);
    }
    
    return moves;
}


const solution = (points, routes) => {
    let answer = 0;

    // 포인트 저장
    const pointMap = new Map();
    points.forEach((point, i) => pointMap.set(i + 1, [point[0], point[1]]));

    // 초단위로 로봇들의 이동 좌표를 저장할 Map 객체
    const robotsLocationByTimes = new Map();
    
    for(const route of routes) {
        let currentTime = 0;
        robotsLocationByTimes.set(currentTime, (robotsLocationByTimes.get(0) || []).concat([pointMap.get(route[0])]));

        for(let i = 0; i < route.length - 1; i++) {
            const [startX, startY] = pointMap.get(route[i]);
            const [endX, endY] = pointMap.get(route[i + 1]);
            const moves = getShortestMoves(startX, startY, endX, endY).slice(1);

            moves.forEach(move => {
                currentTime++;
                robotsLocationByTimes.set(currentTime, (robotsLocationByTimes.get(currentTime) || []).concat([move]));
            })
        }
    }

    for(let i = 0; i < robotsLocationByTimes.size; i++) {
        const robotsLocations = robotsLocationByTimes.get(i);
        const countMap = new Map();

        for(const locations of robotsLocations) {
            const str = JSON.stringify(locations);

            countMap.set(str, (countMap.get(str) || 0) + 1);
        }

        for(const count of countMap.values()) {
            answer += count >= 2 ? 1 : 0;
        }
    }

    return answer;
}