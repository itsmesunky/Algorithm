const solution = (book_time) => {
    // 1. 입실 시간 기준으로 오름차순 정렬
    const sortedBookTime = book_time
        .map(([checkIn, checkOut]) => [
            convertToMinutes(checkIn),
            convertToMinutes(checkOut)
        ])
        .sort((a, b) => a[0] - b[0]);

    // 2. 퇴실 시간을 담을 배열 (우선순위 큐 역할)
    const rooms = [];

    for (const [checkIn, checkOut] of sortedBookTime) {
        // 3. 가장 빨리 비는 방(가장 이른 퇴실 시간) 찾기
        rooms.sort((a, b) => a - b);
        const earliestCheckout = rooms[0];

        // 4. 빈 방이 있는지 확인
        if (rooms.length > 0 && earliestCheckout + 10 <= checkIn) {
            // 빈 방이 있다면, 가장 빨리 비는 방을 재사용
            rooms.shift(); // 가장 이른 퇴실 시간 제거
        }
        // 새로운 방 할당 (또는 기존 방에 새로운 퇴실 시간 추가)
        rooms.push(checkOut);
    }

    return rooms.length;
};

// 시간을 분 단위로 변환하는 헬퍼 함수
const convertToMinutes = (timeStr) => {
    const [hour, minute] = timeStr.split(':').map(Number);
    return hour * 60 + minute;
};