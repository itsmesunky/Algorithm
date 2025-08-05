/**
* computeParkingTime: 주차 시간을 분 단위로 계산해주는 함수
* @param(from): 입차 시간
* @param(to): 출차 시간 
*/
const computeParkingTime = (from, to) => {
    // 입차 시간, 입차 분
    const [fromHour, fromMinute] = from.split(":");
    // 출차 시간, 출차 분
    const [toHour, toMinute] = to.split(":");
    
    let diffHour = +toHour - +fromHour;
    let diffMinute = +toMinute - +fromMinute;
    
    if(diffMinute > 59) {
        diffMinute %= 60;
        diffHour += Math.floor(diffHour / 60);
    }
    
    return diffHour * 60 + diffMinute;
}

const solution = (fees, records) => {
    // 기본 시간, 기본 요금, 단위 시간, 단위 요금
    const [defaultTime, defaultFees, unitTime, unitFees] = fees;
    
    // 차량별 입/출차 시간 저장
    const obj = {};
    for(const record of records) {
        const [time, number] = record.split(" ");
        obj[number] = (obj[number] ?? []).concat([time]);
    }
    
    for(const key in obj) {
        // 주차 시간
        let parkingTime = 0;
        
        // 주차 요금
        let fees = defaultFees;
        
        // 출차 기록이 없을 때, "23:59"에 출차된 것으로 간주
        if(obj[key].length % 2) {
            obj[key].push("23:59");
        }
        
        for(let i = 0; i < obj[key].length - 1; i += 2) {
            parkingTime += computeParkingTime(obj[key][i], obj[key][i + 1]);
        }
        
        // 누적 주차 시간이 기본 시간 초과 시
        if(defaultTime < parkingTime) {
            let remainTime = parkingTime - defaultTime;
            fees += Math.ceil(remainTime / unitTime) * unitFees;
        }
        
        obj[key].push(fees);
    }
    
    return Object.keys(obj).sort((a, b) => a - b).map((key) => obj[key].at(-1));
    
}
