function solution(k, ranges) {
  // 1) 우박수열 생성 (k -> 1)
  const seq = [k];
  while (k !== 1) {
    k = k % 2 === 0 ? k / 2 : k * 3 + 1;
    seq.push(k);
  }

  // 2) 구간별 사다리꼴 넓이 계산: area[i] = (seq[i] + seq[i+1]) / 2
  const n = seq.length;           // 점의 수
  const area = new Array(n - 1);  // 구간(간격)의 수는 n-1
  for (let i = 0; i < n - 1; i++) {
    area[i] = (seq[i] + seq[i + 1]) / 2;
  }

  // 3) 넓이 누적합 prefix: prefix[0] = 0, prefix[i] = 0..i-1 구간 넓이 합
  const prefix = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + area[i - 1];
  }
  // prefix[i]는 x=0부터 x=i까지의 총 넓이 (i는 점 인덱스)

  // 4) 질의 처리
  // ranges의 각 [a, b]에 대해 end = (n-1) + b
  // 유효성: a <= end 이어야 함. 아니면 -1
  const lastIndex = n - 1;
  return ranges.map(([a, b]) => {
    const end = lastIndex + b;
    if (a > end) return -1;
    // 결과는 x=a..x=end 까지 넓이 = prefix[end] - prefix[a]
    return prefix[end] - prefix[a];
  });
}
