function solution(numbers) {
  const answer = [];

  for (let num of numbers) {
    const bin = num.toString(2);                 // 1) 이진수 변환
    const padded = padToFullBinaryTree(bin);     // 2) 포화이진트리 길이로 패딩

    const isValid = check(padded);               // 3) 규칙 검사
    answer.push(isValid ? 1 : 0);
  }
  
  return answer;
}

// 🔹 이진수를 가장 가까운 포화이진트리 길이로 padding
function padToFullBinaryTree(bin) {
  const len = bin.length;
  let full = 1;

  // 포화 트리 노드 수 찾기 (1,3,7,15,...)
  while (full < len) {
    full = full * 2 + 1;
  }

  // 왼쪽에 0 채움
  return bin.padStart(full, '0');
}

// 🔹 재귀적으로 부모=0일 때 자식이 1이면 false
function check(bin) {
  if (bin.length === 1) return true;  // leaf는 항상 OK

  const mid = Math.floor(bin.length / 2);
  const root = bin[mid];

  const left = bin.slice(0, mid);
  const right = bin.slice(mid + 1);

  // 규칙 위반: 부모(root)가 0인데 서브트리에 1이 있으면 불가
  if (root === '0') {
    if (left.includes('1') || right.includes('1')) return false;
    return true;
  }

  // root가 1이면 양쪽 서브트리도 재귀적으로 검사
  return check(left) && check(right);
}
