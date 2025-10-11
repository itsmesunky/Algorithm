/**
* 문제 해결 시나리오
* 1. 각 정점(노드)마다 진입 횟수와 진출 횟수를 저장
* 2. 그래프 개수 구하기
* - 특정 노드의 진출 횟수가 2 이상이고, 진입 횟수가 없는 노드의 진출 횟수가 곧 그래프 개수
* 3. 각 노드로 그래프 구분
* 3.1 막대 그래프: 진출 횟수가 없는 경우
* 3.2 8자 그래프: 진출 횟수, 진입 횟수 모두 2 이상인 경우
* 3.3 도넛 그래프: 그래프 개수 - 3.1의 개수 - 3.2의 개수
*/
const solution = (edges) => {
    let createdNode = 0; // 생성 노드 번호
    
    let graphCount = 0; // 그래프 개수
    let donutGraph = 0; // 도넛 그래프 개수
    let stickGraph = 0; // 막대 그래프 개수
    let eightGraph = 0; // 8자 그래프 개수
    
    // 각 노드에 대해 진입 횟수, 진출 횟수를 저장할 객체
    const graphInfo = {};
    
    for(const [a, b] of edges) {
        if(!graphInfo[a]) {
            graphInfo[a] = {inCount: 0, outCount: 0};
        }
        
        if(!graphInfo[b]) {
            graphInfo[b] = {inCount: 0, outCount: 0};
        }
        
        graphInfo[a].outCount++;
        graphInfo[b].inCount++;
    }
    
    for(const node in graphInfo) {
        const { inCount, outCount } = graphInfo[node];
        
        if(!inCount && 2 <= outCount) { // 생성 노드 구분
            createdNode = +node;
            graphCount = outCount;
        } else if(!outCount) { // 막대 그래프 구분
            stickGraph++;
        } else if(2 <= outCount && 2 <= inCount) { // 8자 그래프 구분
            eightGraph++;
        }
    }
    
    donutGraph = graphCount - stickGraph - eightGraph; // 도넛 그래프 구분
    
    return [createdNode, donutGraph, stickGraph, eightGraph];
}