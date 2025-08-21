/**
* convertTime: 'HH:MM' 형식의 문자열이 주어지면 분 단위로 변환해주는 함수
* @param(str): 'HH:MM' 형식의 문자열
*/
const convertTime = (str) => {
    const [hour, min] = str.split(":").map(Number);
    return hour * 60 + min;
}

const solution = (book_time) => {
    // 1. 입실 시간 기준으로 오름차순 정렬
    const sortedBookTime = book_time.map(([checkIn, checkOut]) =>
                                            [convertTime(checkIn), convertTime(checkOut)]
                                        ).sort((a, b) => a[0] - b[0]);
    
    // 2. 방 퇴실 시간을 담을 우선순위 큐
    const rooms = [];
    
    for(const [checkIn, checkOut] of sortedBookTime) {
        // 3. 퇴실 시간 기준 오름차순 정렬
        rooms.sort((a, b) => a - b);
        
        if(rooms.length && rooms[0] + 10 <= checkIn) {
            // 4. 기존의 방을 이용할 수 있다면 해당 방의 퇴실 시간 제거
            rooms.shift();
        }
        
        rooms.push(checkOut);
    }
    
    return rooms.length;
}