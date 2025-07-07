// 문자열 → 초
const strToSec = (str) => {
    const [m, s] = str.split(":");
    return (+m * 60) + (+s);
}

// 초 → 문자열
const numToStr = (num) => {
    const [m, s] = [Math.floor(num / 60), num % 60];
    return `${m.toString().padStart('2', 0)}:${s.toString().padStart(2, '0')}`;
}

const solution = (video_len, pos, op_start, op_end, commands) => {
    const video_len_num = strToSec(video_len);
    const pos_num = strToSec(pos);
    const [op_start_num, op_end_num] = [strToSec(op_start), strToSec(op_end)];
    
    let currPos = pos_num;
          
    if(op_start_num <= pos_num && pos_num <= op_end_num) {
        currPos = op_end_num;
    }
    
    for(const command of commands) {
        switch(command) {
            case "prev":
                const prevPos = Math.max(currPos - 10, 0);
                
                if(op_start_num <= prevPos && prevPos <= op_end_num) {
                    currPos = op_end_num;
                } else {
                    currPos = prevPos;
                }
                
                break;
            case "next":
                const nextPos = currPos + 10;
                
                if(nextPos > video_len_num) {
                    currPos = video_len_num;
                } else if(op_start_num <= nextPos && nextPos <= op_end_num) {
                    currPos = op_end_num;
                } else {
                    currPos = nextPos;
                }
                
                break;
        }
    }
    
    return numToStr(currPos);
}