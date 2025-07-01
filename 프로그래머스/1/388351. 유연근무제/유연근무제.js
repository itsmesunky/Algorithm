// 10분뒤 시간을 반환하는 함수
const getTime = (strHour, strMin) => {
  const total = (parseInt(strHour) * 60) + (parseInt(strMin) + 10);
  const hour = String(Math.floor(total / 60) % 24).padStart(2, '0');
  const minute = String(total % 60).padStart(2, '0');
  
  return parseInt(hour + minute);
}

const solution = (schedules, timelogs, startday) => {
    let answer = schedules.length;
    
    for(let i = 0; i < timelogs.length; i++) {
        const time = schedules[i].toString().padStart(4, '0');
        const applyTime = getTime(time.substring(0, 2), time.substring(2));
        
        let day = startday;
            
        for(let j = 0; j < timelogs[i].length; j++) {
            if((day % 7 > 0) && (day % 7 <= 5)) {
                if(timelogs[i][j] > applyTime) {
                    answer--;
                    break;
                }    
            }
            ++day;
        }
    }
    
    return answer;
}