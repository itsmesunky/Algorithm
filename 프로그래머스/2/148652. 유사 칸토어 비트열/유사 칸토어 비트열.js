function solution(n, left, right) {
  const L = BigInt(left);
  const R = BigInt(right);

  function pow5(k) {
    let res = 1n;
    for (let i = 0; i < k; i++) res *= 5n;
    return res;
  }
  const totalLen = pow5(n);

  function countOnes(level, ql, qr) {
    if (ql > qr) return 0n;
    if (level === 0) {
      return (ql <= 1n && 1n <= qr) ? 1n : 0n;
    }

    const part = pow5(level - 1); // 각 부분의 길이
    let ans = 0n;

    for (let i = 0; i < 5; i++) {
      const segL = BigInt(i) * part + 1n;
      const segR = BigInt(i + 1) * part;
      if (segR < ql || segL > qr) continue; // 겹치지 않음

      if (i === 2) continue;

      const childQl = (ql > segL) ? (ql - segL + 1n) : 1n;
      const childQr = (qr < segR) ? (qr - segL + 1n) : (segR - segL + 1n);

      ans += countOnes(level - 1, childQl, childQr);
    }

    return ans;
  }

  const result = countOnes(n, L, R);

  if (result <= BigInt(Number.MAX_SAFE_INTEGER)) return Number(result);
  return result.toString();
}