function solution(arr) {
  const answer = [0, 0]; // [0의 개수, 1의 개수]

  // 재귀 함수 정의
  // startX, startY: 현재 탐색하는 사각형의 좌상단 좌표
  // length: 현재 사각형의 한 변의 길이
  function quad(startX, startY, length) {
    // 기저 조건 1: 길이가 1인 사각형인 경우
    if (length === 1) {
      answer[arr[startX][startY]]++;
      return;
    }

    // 기저 조건 2: 모든 원소가 같은 값인 경우
    const firstValue = arr[startX][startY];
    let isSame = true;
    for (let i = startX; i < startX + length; i++) {
      for (let j = startY; j < startY + length; j++) {
        if (arr[i][j] !== firstValue) {
          isSame = false;
          break;
        }
      }
      if (!isSame) break;
    }

    if (isSame) {
      answer[firstValue]++;
      return;
    }

    // 재귀 호출: 4개로 분할
    const newLength = length / 2;
    quad(startX, startY, newLength); // 왼쪽 위
    quad(startX, startY + newLength, newLength); // 오른쪽 위
    quad(startX + newLength, startY, newLength); // 왼쪽 아래
    quad(startX + newLength, startY + newLength, newLength); // 오른쪽 아래
  }

  // 초기 호출: 전체 사각형
  quad(0, 0, arr.length);

  return answer;
}