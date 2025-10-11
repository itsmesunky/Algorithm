/**
 * 프로그래머스 - 도넛과 막대 그래프
 * @param {number[][]} edges - 간선 정보 배열
 * @returns {number[]} - [생성 정점 번호, 도넛 수, 막대 수, 8자 수]
 */
const solution = (edges) => {
    // [생성 정점 번호, 도넛 수, 막대 수, 8자 수]
    const answer = [0, 0, 0, 0];
    
    // 맵을 이용해 진출/진입 차수 및 인접 리스트 효율적으로 관리
    const outDegree = new Map();
    const inDegree = new Map();
    const graph = new Map();
    
    // 1. 차수 및 인접 리스트 구축
    for (const [u, v] of edges) {
        // u -> v 간선 처리
        outDegree.set(u, (outDegree.get(u) || 0) + 1);
        inDegree.set(v, (inDegree.get(v) || 0) + 1);

        // 인접 리스트
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        graph.get(u).push(v);
        
        // v 노드가 종점일 경우 진출 차수 0으로 초기화
        if (!outDegree.has(v)) {
            outDegree.set(v, 0);
        }
        // u 노드가 시작점일 경우 진입 차수 0으로 초기화
        if (!inDegree.has(u)) {
            inDegree.set(u, 0);
        }
    }

    // 2. 생성된 정점 찾기 (진입 차수 0, 진출 차수 2 이상)
    let generatedNode = 0;
    for (const [node, outDeg] of outDegree) {
        const inDeg = inDegree.get(node) || 0;
        
        // 진입 차수 0 && 진출 차수 2 이상
        if (inDeg === 0 && outDeg >= 2) {
            generatedNode = node;
            answer[0] = node;
            break;
        }
    }

    // 3. 생성된 정점에서 뻗어나가는 그래프 분리 및 분류 (BFS 사용)
    const visited = new Set();
    const startNodes = graph.get(generatedNode) || [];
    
    // 생성 정점에서 나가는 간선들을 제거한 후 남은 각 그래프 탐색
    for (const start of startNodes) {
        if (visited.has(start)) continue;

        let nodeCount = 0; // 컴포넌트 내 노드 수
        let edgeCount = 0; // 컴포넌트 내 간선 수
        let eightShapeFound = false; // 8자 모양 교차점 발견 여부

        // BFS 큐 초기화 (Set을 사용해 중복 방문 방지)
        const queue = [start];
        const currentComponent = new Set([start]); // 현재 컴포넌트 노드
        
        // 시작 노드부터 방문 시작
        visited.add(start);

        // --- BFS 시작 ---
        let head = 0;
        while(head < queue.length) {
            const u = queue[head++];

            // u 노드의 In/Out 차수를 확인하여 8자 모양 판별
            const uIn = inDegree.get(u) || 0;
            const uOut = outDegree.get(u) || 0;
            
            // 8자 모양 그래프의 교차점 특징: 진입 차수 >= 2, 진출 차수 >= 2
            if (uIn >= 2 && uOut >= 2) {
                eightShapeFound = true;
            }

            // 노드 수 증가 (큐에 들어간 노드는 중복 없이 세어짐)
            nodeCount++;

            // u에서 나가는 간선들을 탐색
            const neighbors = graph.get(u) || [];
            edgeCount += neighbors.length; // u에서 나가는 모든 간선을 센다

            for (const v of neighbors) {
                if (!visited.has(v)) {
                    visited.add(v);
                    queue.push(v);
                }
            }
        }
        // --- BFS 종료 ---

        // 4. 그래프 유형 분류
        if (eightShapeFound) {
            answer[3]++; // 8자 모양 (교차점 발견이 가장 강력한 증거)
        } else if (edgeCount === nodeCount) {
            answer[1]++; // 도넛 모양 (N == E)
        } else if (edgeCount === nodeCount - 1) {
            answer[2]++; // 막대 모양 (E == N - 1)
        }
    }
    
    return answer;
};