/**
 * 프로그래머스 섬 연결하기 - LV3
 * 최소 신장 트리 (Kruskal 알고리즘 + Union-Find)
 */

const solution = (n, costs) => {
  // 1. 간선 비용 기준 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 2. 각 노드의 부모 노드를 자기 자신으로 초기화
  const parent = Array.from({ length: n }, (_, i) => i);

  // 3. find 함수 (경로 압축)
  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  // 4. union 함수
  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false; // 이미 같은 집합
    parent[rootB] = rootA; // 병합
    return true;
  };

  // 5. 최소 비용 계산
  let total = 0;
  for (const [a, b, cost] of costs) {
    if (union(a, b)) total += cost; // 사이클이 생기지 않는 경우에만 추가
  }

  return total;
};
