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
    
    // 2. 방 퇴실 시간(청소 시간 포함) 저장 배열
    const rooms = [];
    
    for(const [checkIn, checkOut] of sortedBookTime) {
        // 3. 입실 가능한 방을 찾아봄 
        const idx = rooms.findIndex(room => room <= checkIn);
        
        if(idx >= 0) {
            rooms[idx] = checkOut + 10;
        } else {
            rooms.push(checkOut + 10);
        }
    }
    
    return rooms.length;
}