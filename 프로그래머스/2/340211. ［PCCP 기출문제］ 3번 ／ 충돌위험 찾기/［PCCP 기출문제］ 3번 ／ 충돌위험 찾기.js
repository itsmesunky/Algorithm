/**
 * 맨해튼 거리를 기반으로, 'r 우선' 규칙을 만족하는 유일한 경로를 생성합니다.
 * @returns {Array<Array<number>>} - 시간순 좌표 리스트 (첫 좌표 포함)
 */
const generateUniqueShortestPath = (startX, startY, endX, endY) => {
    let currR = startX;
    let currC = startY;
    const path = [[startX, startY]];

    while (currR !== endX || currC !== endY) {
        // 1. r 좌표 조정 (r 우선 규칙)
        if (currR !== endX) {
            // endX가 더 크면 r 증가, 작으면 r 감소
            currR += (endX > currR) ? 1 : -1;
        } 
        // 2. r 좌표 조정이 끝난 후 c 좌표 조정
        else if (currC !== endY) {
            // endY가 더 크면 c 증가, 작으면 c 감소
            currC += (endY > currC) ? 1 : -1;
        }

        path.push([currR, currC]);
    }
    return path;
}

const solution = (points, routes) => {
    // ... (포인트 매핑, R, C 구하기 - 전처리 부분은 그대로 사용) ...
    const pointMap = new Map();
    points.forEach(([r, c], index) => { pointMap.set(index + 1, [r, c]); /* R, C 계산 */ });

    // 시간별 로봇 위치 기록 Map
    const robotLocationsByTime = new Map();
    let maxTime = 0;

    for (const route of routes) {
        let currentTime = 0;
        
        // 로봇의 첫 출발 위치는 0초에 기록됩니다.
        let [currentR, currentC] = pointMap.get(route[0]);
        const startKey = `${currentR}_${currentC}`;
        robotLocationsByTime.set(0, (robotLocationsByTime.get(0) || []).concat(startKey));

        for (let i = 0; i < route.length - 1; i++) {
            const startPointNum = route[i];
            const endPointNum = route[i + 1];

            const [startX, startY] = pointMap.get(startPointNum);
            const [endX, endY] = pointMap.get(endPointNum);
            
            // 맨해튼 거리를 이용한 경로 생성 (O(D) 복잡도)
            // path는 첫 좌표와 마지막 좌표를 모두 포함합니다.
            const path = generateUniqueShortestPath(startX, startY, endX, endY);

            // 이전 경로의 끝 지점(path[0])은 이미 기록되었으므로 path.slice(1)부터 기록합니다.
            const newSteps = path.slice(1); 
            
            for (const [r, c] of newSteps) {
                currentTime++;
                const coordKey = `${r}_${c}`;
                
                if (!robotLocationsByTime.has(currentTime)) {
                    robotLocationsByTime.set(currentTime, []);
                }
                robotLocationsByTime.get(currentTime).push(coordKey);
            }
        }
        maxTime = Math.max(maxTime, currentTime);
    }
    
    // ... (충돌 위험 계산 로직은 그대로 사용) ...
    let answer = 0;
    for (let t = 0; t <= maxTime; t++) {
        const locations = robotLocationsByTime.get(t);
        if (!locations) continue;

        const locationCounts = new Map();
        for (const loc of locations) {
            locationCounts.set(loc, (locationCounts.get(loc) || 0) + 1);
        }

        for (const count of locationCounts.values()) {
            if (count >= 2) {
                answer++;
            }
        }
    }
    return answer;
}