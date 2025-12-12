function solution(n, paths, gates, summits) {
    // 1. 그래프 구성 (양방향)
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [i, j, w] of paths) {
        graph[i].push([j, w]);
        graph[j].push([i, w]);
    }

    // 2. 산봉우리 확인용 Set (빠른 조회를 위해)
    const summitSet = new Set(summits);

    // 3. intensity 배열 초기화 (Infinity로 채움)
    const intensities = new Array(n + 1).fill(Infinity);
    
    // 4. 우선순위 큐(MinHeap) 생성 및 출발지(Gate) 처리
    const pq = new MinHeap();
    
    // 모든 출입구를 큐에 넣고 시작 (intensity 0)
    for (const gate of gates) {
        pq.push([0, gate]); // [cost, node]
        intensities[gate] = 0;
    }

    // 5. 다익스트라 수행
    while (pq.size() > 0) {
        const [currentIntensity, currentNode] = pq.pop();

        // 산봉우리에 도착했거나, 현재 경로가 이미 기록된 최소 intensity보다 크다면 패스
        // (단, 큐에서 꺼낸 시점의 intensity가 기록된 것보다 크면 굳이 볼 필요 없음)
        if (summitSet.has(currentNode) || currentIntensity > intensities[currentNode]) {
            continue;
        }

        for (const [nextNode, weight] of graph[currentNode]) {
            // 해당 경로로 갔을 때의 intensity 계산 (경로 중 가장 큰 가중치)
            const maxIntensity = Math.max(currentIntensity, weight);

            // 더 작은 intensity로 도달 가능하다면 갱신
            if (maxIntensity < intensities[nextNode]) {
                intensities[nextNode] = maxIntensity;
                pq.push([maxIntensity, nextNode]);
            }
        }
    }

    // 6. 결과 찾기
    // intensity가 최소인 등산코스 찾기, 같다면 산봉우리 번호가 낮은 순
    let minIntensity = Infinity;
    let minSummit = -1;

    // 산봉우리 번호 순으로 정렬하여 확인 (동일 intensity일 때 낮은 번호 우선 선택을 위해)
    summits.sort((a, b) => a - b);

    for (const summit of summits) {
        if (intensities[summit] < minIntensity) {
            minIntensity = intensities[summit];
            minSummit = summit;
        }
    }

    return [minSummit, minIntensity];
}

// MinHeap 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftIndex < length) {
                if (this.heap[leftIndex][0] < this.heap[index][0]) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightIndex][0] < this.heap[index][0]) ||
                    (swapIndex !== null && this.heap[rightIndex][0] < this.heap[leftIndex][0])
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}