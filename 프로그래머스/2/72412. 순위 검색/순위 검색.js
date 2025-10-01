// 프로그래머스 "순위 검색" 문제 JS 풀이
function solution(info, query) {
  const map = new Map();

  // info 항목을 받아서 모든 조합(와일드카드 포함)으로 key를 만들고 점수 추가
  const addInfo = (parts, score) => {
    // 2^4 = 16개 조합 (각 속성에 대해 실제값 또는 '-' 선택)
    for (let mask = 0; mask < (1 << 4); mask++) {
      const keyParts = [];
      for (let i = 0; i < 4; i++) {
        if (mask & (1 << i)) keyParts.push(parts[i]);
        else keyParts.push('-');
      }
      const key = keyParts.join(' ');
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(score);
    }
  };

  // 이분 탐색: arr에서 target 이상인 첫 인덱스 (lower_bound)
  const lowerBound = (arr, target) => {
    let l = 0, r = arr.length;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] >= target) r = mid;
      else l = mid + 1;
    }
    return l;
  };

  // info 처리
  for (const line of info) {
    const [a, b, c, d, scoreStr] = line.split(' ');
    const score = Number(scoreStr);
    addInfo([a, b, c, d], score);
  }

  // 각 key의 점수 리스트 정렬 (이후 이분탐색 가능하게)
  for (const [k, arr] of map) {
    arr.sort((x, y) => x - y);
    map.set(k, arr);
  }

  const ans = [];
  for (const q of query) {
    // 질의 문자열은 "and"로 연결되어 있어서 제거 후 split
    // 예: "java and backend and junior and pizza 100"
    const cleaned = q.replace(/ and /g, ' ');
    const parts = cleaned.split(' ');
    const target = Number(parts.pop()); // 마지막이 점수
    const key = parts.join(' ');

    if (!map.has(key)) {
      ans.push(0);
      continue;
    }
    const arr = map.get(key);
    const idx = lowerBound(arr, target);
    ans.push(arr.length - idx);
  }

  return ans;
}
